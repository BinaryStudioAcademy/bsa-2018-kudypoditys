import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import filters from './filters.js'

class DrawFilters extends React.Component {

    render(){
        const temp = filters.map(box=>{
            // const filters =
            box.children.map(filter=>(
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
            ))
            // {filters}
        });
        return(temp)
    }
}
export default DrawFilters;