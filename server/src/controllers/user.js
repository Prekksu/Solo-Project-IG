const db = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");
const moment = require("moment");
const sharp = require("sharp");
const users = require("../models/user");
const url = process.env.url;
const url_image = process.env.URL_IMAGE;

const userController = {
	register: async (req, res) => {
		try {
			const { email, name, username, password } = req.body;
			const checker1 = await db.User.findOne({ where: { email } });
			const checker2 = await db.User.findOne({ where: { username } });
			if (!checker1?.dataValues?.id && !checker2?.dataValues?.id) {
				const hashPassword = await bcrypt.hash(password, 10);

				await db.User.create({
					name,
					username,
					email,
					password: hashPassword,
				}).then(() => {
					res.send({
						message: "your register was successful",
					});
				});
			} else if (checker1?.dataValues?.id) {
				res.send({
					message: `user with email ${email} already exist`,
				});
			} else if (checker2?.dataValues?.id) {
				res.send({
					message: `user with username ${username} already exist`,
				});
			}
		} catch (err) {
			return res.status(500).send({
				message: err.message,
			});
		}
	},
	login: async (req, res) => {
		try {
			const { emna, password } = req.query;
			const user = await db.User.findOne({
				where: {
					[Op.and]: [
						{
							username: emna,
						},
						{
							email: emna,
						},
					],
				},
			});
			if (user) {
				const match = await bcrypt.compare(password, user.dataValues.password);
				if (match) {
					const payload = {
						id: user.dataValues.id,
					};
					const token = await db.Token.create({
						expired: moment().add(1, "days").format(),
						token: nanoid(),
						payload: JSON.stringify(payload),
						valid: true,
					});
					return res.send({
						message: "login berhasil",
						value: user,
						token: token.dataValues.token,
					});
				} else {
					throw new Error("login gagal");
				}
			} else {
				return res.send({
					message: "login gagal",
				});
			}
		} catch (err) {
			return res.status(500).send({
				message: err.message,
			});
		}
	},
	getByToken: async (req, res, next) => {
		try {
			let token = req.headers.authorization;
			token = token.split(" ")[1];
			let p = await db.Token.findOne({
				where: {
					[Op.and]: [
						{
							token,
						},
						{
							expired: {
								[Op.gt]: moment("00:00:00", "hh:mm:ss").format(),
								[Op.lte]: moment().add(1, "d").format(),
							},
						},
					],
				},
			});
			console.log(moment().format());
			if (!p) {
				throw new Error("token has expired");
			}
			console.log(p.dataValues);
			user = await db.User.findOne({
				where: {
					id: JSON.parse(p?.dataValues?.payload).id,
				},
			});
			delete user.dataValues.password;
			req.user = user;
			next();
		} catch (err) {
			res.status(500).send({
				message: err.message,
			});
		}
	},
	getUserByToken: async (req, res) => {
		console.log("masuk sini juga");
		console.log(req.user);
		res.send(req.user);
	},
	forgetPass: async (req, res) => {
		try {
			const { emna } = req.query;
			const user = await db.User.findOne({
				where: {
					email: emna,
				},
			});
			if (user.dataValues) {
				await db.Token.update(
					{
						valid: false,
					},
					{
						where: {
							payload: JSON.stringify({ id: user.dataValues.id }),
							status: "FORGOT-PASSWORD",
						},
					}
				);
				const payload = {
					id: user.dataValues.id,
				};
				const generateToken = nanoid();
				const token = await db.Token.create({
					expired: moment().add(1, "d").format(),
					token: generateToken,
					payload: JSON.stringify(payload),
					status: "FORGOT-PASSWORD",
				});

				await mailer({
					subject: "Reset Password",
					to: user.dataValues.email,
					text: url_pass + generateToken,
				});

				return res.send({
					message: "please check your email",
				});
			}
		} catch (err) {
			res.status(500).send({
				message: err.message,
			});
		}
	},
	changePass: async (req, res) => {
		try {
			const { token } = req.query;
			const { password } = req.body;
			const { id } = req.user;
			const hashPassword = await bcrypt.hash(password, 10);
			await db.User.update(
				{
					password: hashPassword,
				},
				{
					where: {
						id,
					},
				}
			);
			await db.Token.update(
				{
					valid: false,
				},
				{
					where: {
						token,
					},
				}
			);
			await db.User.findOne({
				where: {
					id,
				},
			}).then((result) => {
				res.send(result);
			});
		} catch (err) {
			res.status(500).send({
				message: err.message,
			});
		}
	},
	// uploadAvatar: async (req, res) => {
	// 	try {
	// 		const buffer = await sharp(req.file.buffer)
	// 			.resize(250, 250)
	// 			.png()
	// 			.toBuffer();
	// 		await db.User.create({
	// 			name,
	// 			phone,
	// 			address,
	// 			password: hashPassword,
	// 			role,
	// 		});
	// 		return await db.User.findAll().then((result) => {
	// 			res.send(result);
	// 		});
	// 	} catch (err) {
	// 		return res.status(500).send({
	// 			message: err.message,
	// 		});
	// 	}
	// },
};
module.exports = userController;
