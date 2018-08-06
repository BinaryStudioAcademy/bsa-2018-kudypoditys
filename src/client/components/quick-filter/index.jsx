import React from 'react';
import './index.scss';
import {Checkbox, Card, Image, Button, CardContent, Grid, Container, Icon, Header, Label, Content } from 'semantic-ui-react';

class Quickfilter extends React.Component {

    constructor(props){
        super(props);

        const a = function(){
            const { boxes } = this.props;
            let res = {};
            for(let box of boxes){
                res[box.name] = box.ischecked;
            }
            return res;
        }
        this.state = a;
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
        <div className="quick-filter-item">
            <div className="ui input checkbox">
                <input type="checkbox" defaultChecked={box.ischecked} id={box.name} name={box.name} onChange={this.onChange}/>
                <label className='filter-amount' htmlFor={box.name}>{box.label}</label>
            </div>
            <div className='filter-amount'>{box.amount}</div>
        </div>
        );

        return(
            <div className="quick-filter-box">

                <div className="quick-filter-header">
                    <h2>Filter by</h2>
                </div>
                <p className='quick-filter-group'>Location score</p>
                {list}
            </div>
            );
    }
}
export default Quickfilter;
