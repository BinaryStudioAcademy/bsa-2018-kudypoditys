import React from 'react';
import './index.scss';
class ApplyBtn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){

        return(
            <div className="plan-price-form-group">
                <button className='continue-btn'>Продовжити</button>
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
export default ApplyBtn;

