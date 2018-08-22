export const parkingOptions = {
    providing: [
        {key: "1", text: "No", value: "none"},
        {key: "2", text: "Yes, non-free", value: "non_free"},
        {key: "3", text: "Yes, for free", value: "free"}
    ],
    type: [
        {key: "1", text: "Private", value: "private"},
        {key: "2", text: "Public", value: "public"}
    ],
    placement: [
        {key: "1", text: "On territory", value: "on_territory"},
        {key: "2", text: "Off territory", value: "off_territory"}
    ],
    booking: [
        {key: "1", text: "Need to book", value: "need"},
        {key: "2", text: "No need to book", value: "no_need"}
    ],
    priceForDay: ""
};

export const languages = [
    {key: "1", text: "Ukrainian", value: "ukrainian"},
    {key: "2", text: "Russian", value: "russian"},
    {key: "3", text: "English", value: "english"}
];

export const facilities = [
    {key: "1", text: "Bar", value: "Bar"},
    {key: "2", text: "Sauna", value: "Sauna"},
    {key: "3", text: "Garden", value: "Garden"},
    {key: "4", text: "Terrace", value: "Terrace"},
    {key: "5", text: "Non-smoking rooms", value: "Non-smoking rooms"},
    {key: "6", text: "Family rooms", value: "Family rooms"},
    {key: "7", text: "Jacuzzi", value: "Jacuzzi"},
    {key: "8", text: "Air conditioning", value: "Air conditioning"},
    {key: "9", text: "Station charging electric vehicles", value: "Station charging electric vehicles"},
    {key: "10", text: "You can change electric vehicles", value: "You can change electric vehicles"},
    {key: "11", text: "Pool", value: "Pool"}
];