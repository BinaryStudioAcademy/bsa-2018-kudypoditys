import React from 'react';
import './index.scss';
class BasePriceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){

        return(
            <div className="plan-price-form-group">
                <h3>Базова ціна за ніч</h3>
                <span>
                Це найнижча ціна, яку ми автоматично застосовуємо
                до цього номера на всі дати.
                Перш ніж ваше помешкання почне отримувати бронювання,
                ви можете налаштувати сезонні ціни в особистому кабінеті.
                </span>
                <h5>Ціна за 1 особу</h5>
                <label htmlFor='baseRoomPrice'>UAH/за ніч</label>
                <input name='baseRoomPrice' type="text" placeholder='0'/>
            </div>
        )
    }
}
    // Quickfilter.propTypes = {
    //     boxes: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             id: PropTypes.string,
    //             ischecked: PropTypes.boolean,
    //             label:PropTypes.string,
    //             amount: PropTypes.oneOfType([PropTypes.number],[PropTypes.string]),
    //             type: PropTypes.string
    //         })
    //     ),
    //     OnQuickFilterChange: PropTypes.func
    // }
export default BasePriceForm;

