export function roomQuantityChanged(rooms, roomsAmount, roomId, callback) {
    const roomToModify = {
            ...rooms.filter(r => r.id === roomId)[0]
        };
        roomToModify.selectedAmount = roomsAmount;
        const unsortedRooms = [
            ...rooms.filter(r => r.id !== roomId),
            roomToModify
        ];
        const sortedRooms = unsortedRooms.sort((a, b) => a.id - b.id);
        callback(roomId, sortedRooms);
}