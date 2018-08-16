import React from 'react';
import './index.scss';
class RoomSquare extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){

        return(
            <div className="plan-price-form-group">
                <h3>Розмір номера кв.м (необов'язково)</h3>
                <input name='roomSquare'type="text" placeholder='0'/>
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
export default RoomSquare;

