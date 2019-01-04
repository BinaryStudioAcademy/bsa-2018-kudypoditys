module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("mealInRooms", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
			},
			price: {
				type: Sequelize.DOUBLE,
				allowNull: true,
				defaultValue: null
			},
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
			},
			roomId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "rooms",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
			},
			mealTypeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "mealTypes",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
			},
			mealId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "meals",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            }
        });
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("mealInRooms");
  	}
};
