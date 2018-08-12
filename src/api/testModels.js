const
    apiRoot = '.',
    models = require(apiRoot + '/models');

module.exports = () => {
    models.then(({
        User
    }) => {
        // User.create({
        //     firstName: 'John',
        //     lastName: 'Doe'
        // }).then(() => {
        //     User.findAll().then(console.log);
        // });
    });

    models.then(({
        Country
    }) => {
        Country.create({
            name: 'Ukraine'
        }).then(() => {
            //Country.findAll().then(console.log);
        })
    });
    models.then(({
        Role
    }) => {
        Role.create({
            name: 'user'
        }).then(() => {
            //Role.findAll().then(console.log);
        });
    });

    models.then(({
        RoomType
    }) => {
        RoomType.create({
            name: 'Twin room'
        }).then(() => {
            //RoomType.findAll().then(console.log);
        });
    });

    models.then(({
        Room
    }) => {
        Room.create({
            price: 500,
            amount: 6,
            area: 89,
            description: 'Nice view from the window'
        }).then(() => {
            //Room.findAll().then(console.log);
        });
    });

    models.then(({ // example how to use many to many
        Property, Facility, FacilityList
    }) => {
        return Property.create({
            name: 'Lviv',
            address: 'Zelena 8b',
            description: 'description',
            taxes: 1.3,
            coordinates: { "lat": 41.650299987709538, "lng": 12.536399034779624 },
            rating: 7.9,
            contactPersonName: 'Jhon Doe',
            contactPhone: '9876543'
        }).then(() =>
            Facility.create({ name: 'facility1' })
        ).then(() =>
            Facility.create({ name: 'facility2' })
        ).then(() =>
            FacilityList.create({
                propertyId: 1,
                facilityId: 1
            })
        ).then(() =>
            FacilityList.create({
                propertyId: 1,
                facilityId: 2
            })
        ).then(() => {
            return Property.findOne({
                // JOIN through FacilityList
                include: [{ model: Facility }],

                // WHERE
                where: { id: 1 }
            })
        }).then(prop => {
            console.log('>>>> ', prop.facilities.map(x => `id: ${x.id} name: ${x.name}`));
        });
    });

    models.then(({
        Review
    }) => {
        Review.create({
            content: 'Very nice place',
            createdAt: new Date(1918556565656)
        }).then(() => {
            //Review.findAll().then(console.log);
        });
    });

    models.then(({
        Discount
    }) => {
        Discount.create({
            rate: 1.7,
        }).then(() => {
            //Discount.findAll().then(console.log);
        });
    });

    models.then(({ Reservation, User }) => {
        User.create({
            fullName: 'Doctor Strange',
            password: '1234',
            email: 'doctors@marvel.com',
            phoneNumber: '0123412312',
            avatar: 'https://avatar.com'
        }).then(() => {
            return Reservation.create({
                dateIn: '2018-01-01',
                dateOut: '2018-02-01',
                guestsCount: 3,
                userId: 1,
                roomId: 1
            });
        }).then(() => {
            return User.findAll({
                include: [{
                    model: Reservation
                }]
            });
        }).then(console.log);
    });

    models.then(({
        BedType
    }) => {
        BedType.create({
            id: 1,
            name: 'twin bed'
        }).then(() => {
            //BedType.findAll().then(console.log);
        });
    });
    models.then(({
        BedInRoom
    }) => {
        BedInRoom.create({
            roomId: 1,
            count: 4,
            bedTypeId: 1
        }).then(() => {
            //BedInRoom.findAll().then(console.log);
        });
    });

    models.then(({
        Facility
    }) => {
        Facility.create({
            name: 'Swimming Pool'
        }).then(() => {
            //Facility.findAll().then(console.log);
        });
    });

    models.then(({
        FacilityCategory
    }) => {
        FacilityCategory.create({
            name: 'SPA'
        }).then(() => {
            //FacilityCategory.findAll().then(console.log);
        });
    });


    models.then(({
        Message
    }) => {
        Message.create({
            body: 'Сan i arrive earlier?'
        }).then(() => {
            //Message.findAll().then(console.log);
        });
    });
};

