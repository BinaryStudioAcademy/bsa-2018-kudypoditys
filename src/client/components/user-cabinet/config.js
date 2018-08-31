import React from "react";
import BookingTab from "../user-cabinet-bookings-tab";
import SettingsTab from "../personal-settings-edit";

export const MenuItems = [
    {
        menuItem: {
            key: "Bookings tab",
            header: "My bookings",
            content: "My bookings",
            icon: "calendar alternate outline",
            component: <BookingTab />
        }
    },
    {
        menuItem: {
            key: "Settings tab",
            header: "My settings",
            content: "My settings",
            icon: "settings",
            component: <SettingsTab />
        }
    },
    {
        menuItem: {
            key: "Reviews tab",
            header: "My Reviews",
            content: "My Reviews",
            icon: "comment outline"
            // ,
            // component: <SettingsTab />
        }
    },
    {
        menuItem: {
            key: "My Properties ",
            header: "My Properties ",
            content: "My Properties ",
            icon: "building outline"
            // ,
            // component: <SettingsTab />
        }
    }
];
