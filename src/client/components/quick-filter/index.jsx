import React from 'react';
import './index.scss';

class Quickfilter extends React.Component {

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
        console.log(this.state)
    }

    render() {
        const list = this.props.boxes.map((box)=>
        <div className="box_item">
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
export default Quickfilter;
