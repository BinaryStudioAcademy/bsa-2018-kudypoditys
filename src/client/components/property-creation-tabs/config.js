import {LoginComponent} from "../login";
import React from "react";
import TabRegistration from '../main-info-tab';
import TabPolices from "../polices-tab";


export const MenuItems = [

    {
        menuItem: {
            key: 'Basic Info',
            icon: 'home',
            content: 'Basic Info',
            header: ' Rooms and pricing',
            subheader: 'Start by telling us your property\'s name, contact details and address.',
            component:<TabRegistration/>
        }
    },

    {
        menuItem: {
            key: 'Layout and pricing', icon: 'usd', content: 'Layout and pricing', header: 'Amenities',
            subheader: ' Describe the bed options, common spaces, size, and pricing for each of your apartments',

            //this is how to USE
            component: <TabPolices/>,
        }

    },

    {
        menuItem: {
            key: 'Facilities & services',
            icon: 'bath',
            content: 'Facilities & services',
            header: ' Facilities & services',
            subheader: 'Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.',
        }
    },

    {
        menuItem: {
            key: 'Amenities',
            icon: 'tv',
            content: 'Amenities',
            header: 'Amenities',
            subheader: ' You are nearly done! We just need a few more details about the extra bed options you provide, plus any\n' +
                '    //             amenities or specific features and services available.',
        }
    },

    {
        menuItem: {
            key: 'Photo',
            icon: 'photo',
            content: 'Property photos',
            header: '  Property photos',
            subheader: 'Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We will display these photos on your property\'s page on the Booking.com website.',
        }
    },

];