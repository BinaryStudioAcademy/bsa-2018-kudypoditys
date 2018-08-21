import {LoginComponent} from "../login";
import React from "react";
import TabRegistration from '../main-info-tab';
import PhotoTab from "client/components/photo-tab-registration-property";
import AmenitiesTabRegistration from '../amenities-tab';
import TabPolices from "../polices-tab";
import RoomItem from '../room-item';


export const MenuItems = [

    {
        menuItem: {
            key: 'Basic Info',
            icon: 'home',
            content: 'Basic Info',
            header: ' Rooms and pricing',
            subheader: 'Start by telling us your property\'s name, contact details and address.',
            component: <TabRegistration/>
        }
    },


    {
    //     menuItem: {
    //         key: 'menuItem Room', icon: 'usd', content: 'Layout and pricing', //temporary
    //         header: ' Layout and pricing',
    //         subheader: ' Tell us about your first room. After entering all the necessary info, you can fill in the details of your other rooms',
    //         component: <RoomItem title="Nice title" amount="5" />,
    //     }

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
            component: <AmenitiesTabRegistration/>
        }

    },
    {
        menuItem: {
            key: 'Rules', icon: 'clipboard list', content: 'Rules',
            header: ' Polices',
            subheader: ' Specify some basic policies. Do you allow children or pets? How flexible are you with cancellations?',

            //this is how to USE
            component: <TabPolices/>,
        }

    },
    {
        menuItem: {
            key: 'Photo',
            icon: 'photo',
            content: 'Property photos',
            header: '  Property photos',
            subheader: 'Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We will display these photos on your property\'s page on the Booking.com website.',
            component: <PhotoTab/>
        }
    },

];