import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

class Quickfilter extends React.Component {

    static defaultProps = {
        boxes :[
            {name:'mark9', ischecked: true, label:'Excelent location: 9+', amount: 321},
            {name:'mark8', ischecked: false, label:'Very good location: 8+', amount: 658}
        ]
    }

    constructor(props){
        super(props);

        const checkboxes = function(){
            const { boxes } = this.props;
            let res = {};
            for(let box of boxes){
                res[box.name] = box.ischecked;
            }
            return res;
        }
        this.state = checkboxes;
    }

    onChange = (e) =>{
        const name = e.target.attributes.getNamedItem('name').value;
        this.setState(state=>(
            this.state[name] = !this.state[name]
        ));
    }

    render() {
        const list = this.props.boxes.map((box,index)=>
        <div key = {index} className="box_item">
            <div className="ui input checkbox">
                <input type="checkbox" defaultChecked={box.ischecked} id={box.name} name={box.name} onChange={this.onChange}/>
                <label className='box_amount' htmlFor={box.name}>{box.label}</label>
            </div>
            <div className='box_amount'>{box.amount}</div>
        </div>
        );

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
    boxes: PropTypes.array.isRequired
}
export default Quickfilter;

