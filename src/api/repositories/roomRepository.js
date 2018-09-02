const Repository = require("./generalRepository");
const roomModel = require("../models/Room");
const RoomType = require("../models/RoomType");
const BedInRoom = require("../models/BedInRoom");
const BedType = require("../models/BedType");

class RoomRepository extends Repository {
    //todo additional methods for repository
    findByOptions(options) {
        return this.model.findAll({
            where: options,
            attributes: ["id", "price", "amount", "area", "description"],
            include: [
                { model: RoomType, attributes: ["id", "name"] },
                {
                    model: BedInRoom,
                    attributes: ["count"],
                    include: [{ model: BedType, attributes: ["id", "name"] }]
                }
            ]
        });
    }
}

module.exports = new RoomRepository(roomModel);
