import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import filters from './filters.js'

class DrawFilters extends React.Component {

    render(){
        const arr = filters[0].children;
        const temp = arr.map(filter=>{
            // const filters =
            // const items = box.children.map(filter=>(
                <div
                    key={filter.id}
                    className={filter.ischecked===true?'box_item_checked':'box_item'}>

                    <div className="ui input checkbox">
                        <input key={filter.id}  type="checkbox"
                            defaultChecked={filter.ischecked}
                            id={filter.id}
                            onChange={() => this.props.onchange(filter)}
                        />
                            <label className="box_label" htmlFor={filter.id}> {filter.label} </label>
                    </div>
                    <label className='box_amount' htmlFor={filter.id}>{filter.amount}</label>
                </div>
            // ))
            // {items}
        });
        console.log(arr)
        return(
            <div>
                111111
                {/* {temp} */}
            </div>
        )
    }
}
export default DrawFilters;