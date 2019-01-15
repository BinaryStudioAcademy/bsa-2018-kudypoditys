const Service = require('./generalService');
const mealInRoomRepository = require("../repositories/mealInRoomRepository");

class MealInRoomService extends Service {

    async updateMealsInRoom(data){

        const mappedForCreate = data.forCreate
            .map(x => Object.assign(
                {
                    mealId : x.name.id,
                    mealTypeId : x.type.id,
                    price : Number(x.price),
                    roomId : data.roomId
                }));

        const mappedForUpdate = data.forUpdate
            .map(x => Object.assign(
            {
                id : x.id,
                mealId : x.mealId,
                mealTypeId : x.mealTypeId,
                price : Number(x.price),
                roomId : data.roomId
            }));

        await mealInRoomRepository
            .deleteMany(data.forDelete);

        const newItems = await mealInRoomRepository
            .insertMany(mappedForCreate);

        mappedForUpdate.forEach(async x => await mealInRoomRepository.updateById(x.id, x));

        return newItems;
    }
}

module.exports = new MealInRoomService(mealInRoomRepository);