const cities = [
    {
        name: "Lviv",
        imageUrl:
            "http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg",
        countryId: 1
    },
    {
        name: "Kiev",
        imageUrl:
            "https://s.inyourpocket.com/gallery/130361.jpg",
        countryId: 1
    },
    {
        name: "Ternopil",
        imageUrl:
            "http://www.gazeta-misto.te.ua/wp-content/uploads/2017/05/18671255_1124933304279283_1785861677540967562_n.jpg",
        countryId: 1
    },
    {
        name: "Odessa",
        imageUrl:
            "https://www.hotel-deribas.com/wp-content/uploads/2018/03/19odessa.jpg",
        countryId: 1
    },
    {
        name: "Kharkiv",
        imageUrl:
            "http://www.yoldasin.com/wp-content/uploads/2017/04/kharkiv-tren-istasyonu-960x638.jpg",
        countryId: 1
    },
    {
        name: "Dnipro",
        imageUrl:
            "http://meandyoukraine.com/mainContent/DniproCity/DniproCity_featuredImage.jpg",
        countryId: 1
    },
    {
        name: "Kraków",
        imageUrl:
            "https://tripmydream.cc/travelhub/blog/blog/36/1/block_361.jpg?v1",
        countryId: 2
    },
    {
        name: "Warsaw",
        imageUrl:
            "https://ticketspy.nl/wp-content/uploads/2014/08/Dollarphotoclub_43324037-1024x682.jpg?x43213",
        countryId: 2
    },
    {
        name: "Gdańsk",
        imageUrl:
            "https://api.culture.pl/sites/default/files/2018-04/gdansk_fot_sizun_eyegettyimages.jpg",
        countryId: 2
    },
    {
        name: "Poznań",
        imageUrl:
            "https://prex.com.ua/wp-content/uploads/2017/08/119801-Poznan.jpg.pagespeed.ce.ZttXnv9K1t.jpg",
        countryId: 2
    },
    {
        name: "Katowice",
        imageUrl:
            "https://m.blog.hu/sa/sakk-mester/image//katowice.jpg",
        countryId: 2
    },
    {
        name: "Rzeszów",
        imageUrl:
            "http://blog.kudoybook.com/wp-content/uploads/images/Rzeszow_9867.jpg",
        countryId: 2
    },
    {
        name: "Vienna",
        imageUrl:
            "https://www.rosewoodhotels.com/en/~/media/Images/Rosewood_Hotels_and_Resorts/Rosewood_Vienna/Homepage_1.ashx",
        countryId: 3
    },
    {
        name: "Bregenz",
        imageUrl:
            "http://www.bodensee.eu/regionen-staedte/oesterreich/bodensee-vorarlberg/staedte/bregenz/image-thumb__338__lightbox/bregenz.jpeg",
        countryId: 3
    },
    {
        name: "Salzburg",
        imageUrl:
            "https://www.planetware.com/photos-large/A/austria-salzburg-where-to-stay-skyline.jpg",
        countryId: 3
    }
];

const seed = cities.map((city, i) => ({
    id: i + 1,
    name: city.name,
    imageUrl: city.imageUrl,
    createdAt: new Date(),
    updatedAt: new Date(),
    countryId: city.countryId
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("cities", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("cities", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
