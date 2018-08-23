const
    apiRoot = '.',
    models = require(apiRoot + '/models');

module.exports = () => {


    // models.then(({
    //     Role
    // }) => {
    //     Role.create({
    //         name: 'user'
    //     }).then(() => {
    //         //Role.findAll().then(console.log);
    //     });
    // });

    // models.then(({
    //     RoomType
    // }) => {
    //     RoomType.create({
    //         name: 'Twin room'
    //     }).then(() => {
    //         //RoomType.findAll().then(console.log);
    //     });
    // });

    // models.then(({
    //     Room
    // }) => {
    //     Room.create({
    //         price: 500,
    //         amount: 6,
    //         area: 89,
    //         description: 'Nice view from the window'
    //     }).then(() => {
    //         //Room.findAll().then(console.log);
    //     });
    // });


    // models.then(({ Reservation, User }) => {
    //     User.create({
    //         fullName: 'Doctor Strange',
    //         password: '$2b$10$tT5Nz5oq3OuImIMaxqRt5eu9gPmVOH5yJgKIR88CjvfiKl9itpu/a', // 1234
    //         email: 'email@gmail.com',
    //         phoneNumber: '0123412312',
    //         avatar: 'https://avatar.com'
    //     }).then(() => {
    //         return Reservation.create({
    //             dateIn: '2018-01-01',
    //             dateOut: '2018-02-01',
    //             guestsCount: 3,
    //             userId: 1,
    //             roomId: 1
    //         });
    //     }).then(() => {
    //         return User.findAll({
    //             include: [{
    //                 model: Reservation
    //             }]
    //         });
    //     }).then(console.log);
    // });

};

