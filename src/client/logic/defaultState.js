const state = {
    search: {
        destination: '',
        checkIn: null,
        checkOut: null,
        adults: 1,
        children: 0,
        rooms: 1,
        results: []
    },
    // collections: {
    //     'iud-sdfdsf-asdasd': {
    //         _id: 'iud-sdfdsf-asdasd'
    //     },
    //     'iud-sdfdsf-asdasd': {
    //         _id: 'iud-sdfdsf-asdasd'
    //     }
    // }

    sortType: {
        activeItem: 'price'
    },

    cityInfos: [],

    header: {
        currencies: [],
        selectedCurrency: 1,
        currentUser: null
    }
};

export default state;