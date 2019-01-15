import React from "react";
import BasicInfoPropertyRegistrationForm from '../../basic-info-property-registration-form';

export const MenuItems = [
    {
        menuItem: {
            key: 'Basic Info',
            icon: 'home',
            content: 'Basic Info',
            header: ' Rooms and pricing',
            subheader: 'Start by telling us your property\'s name, contact details and address.',
            component: <BasicInfoPropertyRegistrationForm onSubmit={(data) => {
                // console.log(data);
            }} />
        }
    },

    // {
    //     menuItem: {
    //         key: 'Facilities & services',
    //         icon: 'bath',
    //         content: 'Facilities & services',
    //         header: ' Facilities & services',
    //         subheader: 'Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.',
    //         component: <ServicesTab />
    //     }
    // },

    // // {
    // //     menuItem: {
    // //         key: 'Amenities',
    // //         icon: 'tv',
    // //         content: 'Amenities',
    // //         header: 'Amenities',
    // //         subheader: ' You are nearly done! We just need a few more details about the extra bed options you provide, plus any\n' +
    // //             '    //             amenities or specific features and services available.',
    // //         component: <AmenitiesTabRegistration/>
    // //     }
    // //
    // // },
    // {
    //     menuItem: {
    //         key: 'Rules', icon: 'clipboard list', content: 'Rules',
    //         header: ' Polices',
    //         subheader: ' Specify some basic policies. Do you allow children or pets? How flexible are you with cancellations?',

    //         //this is how to USE
    //         component: <TabPolices />,
    //     }

    // },
    // {
    //     menuItem: {
    //         key: 'Photo',
    //         icon: 'photo',
    //         content: 'Property photos',
    //         header: '  Property photos',
    //         subheader: 'Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We will display these photos on your property\'s page on the Booking.com website.',
    //         component: <PhotoTab />
    //     }
    // },
    // {
    //     menuItem: {
    //         key: 'menuItem Room', icon: 'usd', content: 'Layout and pricing', //temporary
    //         header: ' Layout and pricing',
    //         subheader: ' Tell us about your first room. After entering all the necessary info, you can fill in the details of your other rooms',
    //         component: <PaymentTab />,
    //     }

    // },

];