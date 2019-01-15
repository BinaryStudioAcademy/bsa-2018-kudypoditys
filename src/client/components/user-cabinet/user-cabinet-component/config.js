import React from "react";
import BookingTab from "../user-cabinet-bookings-tab";
import SettingsTab from "../user-cabinet-settings";
import ReviewsTab from "../user-cabinet-reviews-tab";
import PropertyTab from "../user-cabinet-properties-tab";
export const MenuItems = [
    {
        menuItem: {
            key: "Bookings tab",
            content: "My bookings",
            icon: "calendar alternate outline",
            component: <BookingTab />
        }
    },
    {
        menuItem: {
            key: "Settings tab",
            content: "My settings",
            icon: "settings",
            component: <SettingsTab />
        }
    },
    {
        menuItem: {
            key: "Reviews tab",
            content: "My Reviews",
            icon: "comment outline",
            component: <ReviewsTab />
        }
    },
    {
        menuItem: {
            key: "My Properties ",
            content: "My Properties ",
            icon: "building outline",
            component: <PropertyTab />
        }
    }
];
