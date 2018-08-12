const state = {
    search: {
        destination: '231',
        checkIn: null,
        checkOut: null,
        adults: 1,
        children: 0,
        rooms: 1,
        results: []

    },
    foundProperties: {
        'foundProperty1': {
            _id: 0,
            image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
            name: 'DREAM Hostel Lviv',
            description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
            rating: 9.7,
            location: 'Lviv',
            distanceToCenter: 1.2,
            priceTo: 500,
            priceFrom: 700,
            curency: 'uah',
            reviewsNamber: 660,
            locationRating: 9.2,
            availableRoomsCount: 4,
            facilities: ['Free WiFi', 'Free parking', 'Spa and wellness centre', 'Airport shuttle', 'Family rooms', 'Pets allowed', 'Bar']

        },
        'id1': {
            _id: 1
        }
    },



    sortType: {
        activeItem: 'price'
    },

    header: {
        currencies: [],
        selectedCurrency: 1,
        currentUser: null
    },
    shownProperties: {
        'xyz-1': {
            image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
            name: 'DREAM Hostel Lviv',
            description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
            rating: 9.7,
            location: 'Lviv',
            distanceToCenter: 1.2,
            priceTo: 500,
            priceFrom: 700,
            curency: 'uah',
            reviewsNamber: 660,
            locationRating: 9.2,
            availableRoomsCount: 4,
            facilities: ['Free WiFi', 'Free parking', 'Spa and wellness centre', 'Airport shuttle', 'Family rooms', 'Pets allowed', 'Bar']
        },
        'xyz-2': {}
    },
    searchResults: {
        destination: 'Dnipro',
        totalCount: 42,
        shownFrom: 1,
        shownTo: 5
    },


    cityInfos: []

};

export default state;