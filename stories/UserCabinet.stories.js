import { storiesOf } from "@storybook/react";
import React from "react";
import { Booking } from "../src/client/components/user-cabinet-bookings-tab/booking";

storiesOf("User cabinet", module).add("booking element", () => (
    <Booking
        image="https://www.publicdomainpictures.net/pictures/10000/velka/947-1262818585EUqs.jpg"
        booking={{
            id: 1,
            dateIn: 1535058000000,
            dateOut: 1535403600000,
            guestsCount: 3,
            user: {
                id: 2,
                name: "Vlad",
                email: "vlad@mail.com",
                avatar: null
            },
            room: {
                id: 3,
                description: "beautiful",
                price: 90,
                area: 30,
                roomType: {
                    id: 4,
                    name: "Standart"
                },
                property: {
                    name: "Hotel Ukraine",
                    address: "Koval street 16, Kyiv",
                    contactPhone: "0504877582"
                }
            },
            paymentType: {
                id: 5,
                name: "card"
            }
        }}
    />
));
