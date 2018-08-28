const Repository = require("./generalRepository");
const roomModel = require("../models/Room");
const Availability = require("../models/Availability");
const Reservation = require("../models/Reservation");
class RoomRepository extends Repository {
    getRoomWithavailability(id) {
        console.log(id);
        return this.model.findOne({
            where: {
                id
            },
            include: [
                {
                    model: Availability,
                    where: {
                        roomId: id
                    },
                    required: false
                },
                {
                    model: Reservation,
                    where: {
                        roomId: id
                    },
                    required: false
                }
            ]
        });
    }
}

module.exports = new RoomRepository(roomModel);
