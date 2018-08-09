import {storiesOf} from "@storybook/react";
import React from "react";
import {PropertyDescription} from 'client/components/property-description';

let propertyItemData = {
    description: 'Elegant rooms with free Wi-Fi and flat-screen TVs are offered at City Club, located a 10-minute walk from Kharkiv-Chervonozavods\'kyi Train Station. Free parking and a spa are offered.\n' +
        '\n' +
        'Traditional Ukrainian cuisine and a range of international dishes are available at Hotel City Club, and there is a varied breakfast menu available in the mornings. Drinks are available at the bar.\n' +
        '\n' +
        'The air-conditioned rooms feature stylish décor and wooden floors, and are equipped with a work desk and minibar. Luxury toiletries and slippers can be found in the modern bathrooms.\n' +
        '\n' +
        'Guests enjoy a 10 % discount on use of the spa area, which has a sauna and steam bath.\n' +
        '\n' +
        'Kharkov city centre and Kharkov Airport are just 5 km away, and a shuttle service can be booked at the hotel. \n' +
        '\n' +
        'Couples particularly like the location — they rated it 8.3 for a two-person trip.\n' +
        '\n' +
        'This property is also rated for the best value in Kharkov! Guests are getting more for their money when compared to other properties in this city.\n' +
        '\n' +
        'We speak your language!',
    facilities: ['Free WiFi', 'Free parking', 'Spa and wellness centre', 'Airport shuttle', 'Family rooms', 'Pets allowed', 'Bar']
};


storiesOf('Propert Description', module)
    .add('initial', () => <PropertyDescription propertyItemData={propertyItemData}/>);