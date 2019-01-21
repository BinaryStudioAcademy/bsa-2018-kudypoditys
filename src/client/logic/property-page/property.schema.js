import { schema } from "normalizr";
import { roomsSchema } from "../rooms/rooms.schema";

export const propertySchema = new schema.Entity("property", {
    rooms: [roomsSchema]
});
