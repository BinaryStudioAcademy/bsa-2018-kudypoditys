import moment from 'moment';
import { getDaysDifference } from '../helpers/date-helpers';
class RoomPriceService {
    calculatePriceOfBooking(checkIn, checkOut, roomsSelectedAmount, roomPrice, availabilities, propertyCurrency, currentCurrenty) {

        const daysStaying = getDaysDifference(checkIn, checkOut);
        const startDate = checkIn === null ? null : moment(checkIn);
        const endDate = checkOut === null ? null : moment(checkOut);

        let prices = [];
        let priceForOneDay = null;
        for(let i = 0; i < daysStaying; i++) {
            priceForOneDay = null;
            let selectedAmount = roomsSelectedAmount? roomsSelectedAmount: 1;
            for(let av of availabilities)  {
                if(moment(av.dateCal).isBetween(startDate, endDate) && av.amount > 0) {
                    if(av.amount - selectedAmount > 0) {

                        priceForOneDay = av.price * selectedAmount;
                    } else {
                        priceForOneDay = av.price * av.amount + (selectedAmount - av.amount) * roomPrice;
                    }

                    break;
                }
            }
            if(priceForOneDay === null) {
                priceForOneDay = roomPrice * selectedAmount;
            }

            prices.push(priceForOneDay);
        }
        const totalPrice = prices.reduce((total, price) => total + price, 0).toFixed(1);

        return totalPrice;
    }
}

export default new RoomPriceService();
