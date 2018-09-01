import React from "react";
import BookingTab from "../user-cabinet-bookings-tab";
import SettingsTab from "../personal-settings-edit";

export const MenuItems = [
    {
        menuItem: {
            key: "Bookings tab",
            header: "My bookings",
            content: "My bookings",
            component: <BookingTab />
        }
    },
    {
        menuItem: {
            key: "Settings tab",
            header: "My settings",
            content: "My settings",
            component: <SettingsTab />
        }
    }
];
