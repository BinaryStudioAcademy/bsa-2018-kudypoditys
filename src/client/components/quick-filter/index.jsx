import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

class Quickfilter extends React.Component {



    static defaultProps = {
        boxes :[
            {ischecked: true, label:'Excelent location: 9+', amount: 321},
            {ischecked: false, label:'Very good location: 8+', amount: 658}

        ],
        changeQuickFilter (props){
           console.log(props);
        }
    }
    onChange = e =>{
        const propsCopy = this.props.boxes;
        const index = e.target.attributes[1].nodeValue;
        propsCopy[index].ischecked = !propsCopy[index].ischecked;
        this.props.changeQuickFilter(propsCopy);
    }

    render() {
        const list = this.props.boxes.map((box, index)=>(

        <div key={index} className="box_item">
            <div className="ui input checkbox">
                <input  type="checkbox" defaultChecked={box.ischecked} name={index} onChange={this.onChange.bind(this)}/>
                <label className='box_amount' htmlFor={box.name}>{box.label}</label>
            </div>
            <div className='box_amount'>{box.amount}</div>
        </div>

         ));

        return(
            <div className="box">

                <div className="box_header">
                    <h2>Filter by</h2>
                </div>
                <p className='box_group'>Location score</p>
                {list}
            </div>
            );
    }
}
    Quickfilter.propTypes = {
        boxes: PropTypes.arrayOf(
            PropTypes.shape({
                ischecked: PropTypes.boolean,
                label:PropTypes.string,
                amount: PropTypes.oneOfType([PropTypes.number],[PropTypes.string])
            })
        ),
        changeQuickFilter: PropTypes.func
    }
export default Quickfilter;

