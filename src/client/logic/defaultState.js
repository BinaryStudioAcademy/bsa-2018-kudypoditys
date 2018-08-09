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



    searchResults: {
        destination: 'Dnipro',
        totalCount: 42,
        shownFrom: 1,
        shownTo: 5
    },

    sortType: {
        activeItem: 'price'
    },

    cityInfos: []

};

export default state;