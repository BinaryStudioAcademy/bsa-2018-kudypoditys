const models = require(apiRoot + '/models');

module.exports = () => {
    models.then(({
        User
    }) => {
        User.create({
            firstName: 'John',
            lastName: 'Doe'
        }).then(() => {
            User.findAll().then(console.log);
        });
    });

    models.then(({
        Country
    }) => {
        Country.create({
            name: 'Ukraine'
        }).then(() => {
            Country.findAll().then(console.log);
        })
    });
    models.then(({
        Role
    }) => {
        Role.create({
        }).then(() => {
            Role.findAll().then(console.log);
        });
    });

    models.then(({
        RoomType
    }) => {
        RoomType.create({
            name: 'Twin room'
        }).then(() => {
            RoomType.findAll().then(console.log);
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
            Room.findAll().then(console.log);
        });
    });

    models.then(({
        Property
    }) => {
        Property.create({
            name: 'Lviv',
            address: 'Zelena 8b',
            description: 'description',
            taxes: 1.3,
            coordinates: { "lat": 41.650299987709538, "lng": 12.536399034779624 },
            rating: 7.9,
            contactPersonName: 'Jhon Doe',
            contactPhone: '9876543'
        }).then(() => {
            Property.findAll().then(console.log);
        });
    });

    models.then(({
        Review
    }) => {
        Review.create({
            content: 'Very nice place',
            createdAt: new Date(1918556565656)
        }).then(() => {
            Review.findAll().then(console.log);
        });
    });

    models.then(({
        Discount
    }) => {
        Discount.create({
            discountRate: 1.7,
        }).then(() => {
            Discount.findAll().then(console.log);
        });
    });

    models.then(({
        BedType
    }) => {
        BedType.create({
            type: 'twin bed'
        }).then(() => {
            BedType.findAll().then(console.log);
        });
    });
    models.then(({
        BedInRoom
    }) => {
        BedInRoom.create({
            count: 4
        }).then(() => {
            BedInRoom.findAll().then(console.log);
        });
    });

    models.then(({
        Facility
    }) => {
        Facility.create({
            name: 'Swimming Pool'
        }).then(() => {
            Facility.findAll().then(console.log);
        });
    });

    models.then(({
        FacilityCategory
    }) => {
        FacilityCategory.create({
            name: 'SPA'
        }).then(() => {
            FacilityCategory.findAll().then(console.log);
        });
    });


    models.then(({
        Message
    }) => {
        Message.create({
            body: 'Сan i arrive earlier?'
        }).then(() => {
            Message.findAll().then(console.log);
        });
    });
};

