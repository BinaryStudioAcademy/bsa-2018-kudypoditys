import moment from 'moment';
import { getDaysDifference } from '../helpers/date-helpers';
import {convertCurrencyByName} from "client/helpers/convertCurrency";
class RoomPriceService {
    calculatePriceOfBooking(checkIn, checkOut, roomsSelectedAmount, roomPrice, availabilities, propertyCurrency, currentCurrenty) {

        const daysStaying = getDaysDifference(checkIn, checkOut);
        const priceFunc = price =>
            convertCurrencyByName(propertyCurrency.code, price, currentCurrenty.code);
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

            prices.push(priceFunc(priceForOneDay));
        }
        const totalCheck = prices.reduce((total, price) => total + price, 0).toFixed(1);

        return totalCheck;
    }
}

export default new RoomPriceService();
