import React from "react";
import BookingTab from "../user-cabinet-bookings-tab";

export const MenuItems = [
    {
        menuItem: {
            key: "Bookings tab",
            header: "My bookings",
            content: "My bookings",
            component: <BookingTab/>
        }
    },
    {
        menuItem: {
            key: "User tab",
            header: "User header",
            content: "User content",
            component: (
                <React.Fragment>
                    <h1>Hello user tab</h1>
                </React.Fragment>
            )
        }
    }
];
