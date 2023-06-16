module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define("Users", {
		email: Sequelize.STRING,
		name: Sequelize.STRING,
		username: Sequelize.STRING,
		bio: Sequelize.STRING,
		password: Sequelize.STRING,
		img_url: {
			type: Sequelize.STRING,
		},
	});
	return user;
};
