import { schema } from "normalizr";

export const bedInRoomsSchema = new schema.Entity("bedInRooms");
export const roomTypeSchema = new schema.Entity("roomType");
export const reservationsSchema = new schema.Entity("reservations");

export const roomsSchema = new schema.Entity("rooms", {
    bedInRooms: [bedInRoomsSchema],
    roomType: roomTypeSchema,
    reservations: [reservationsSchema]
});
