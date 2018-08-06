import React from 'react';
import './index.scss';
import {Checkbox, Card, Image, Button, CardContent, Grid, Container, Icon, Header, Label, Content } from 'semantic-ui-react';

class Quickfilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mark9:true,
            mark8:false,
            mark7:false,
            mark6:false,
        }
    }

    // componentWillUpdate = name =>{
    //     this.setState(state=>({
    //         [name] : [name] === false ? true : false
    //     }));
    //     console.log(name)


    render() {
        return(
            <div className="quick-filter-box">

                <div className="quick-filter-header">
                    <h2>Filter by</h2>
                </div>

                <p className='quick-filter-group'>Location score</p>

                <div className="quick-filter-item">
                    <Checkbox defaultChecked={this.state.mark9} name='mark9' label='Excelent location: 9+' />
                    <div className='filter-amount'>312</div>
                </div>
                <div className="quick-filter-item">
                    <Checkbox name='mark8' label='Very good location: 8+' />
                    <div className='filter-amount'>562</div>
                </div>
                <div className="quick-filter-item">
                    <Checkbox name='mark7' label='good location: 7+' />
                    <div className='filter-amount'>45</div>
                </div>
                <div className="quick-filter-item">
                    <Checkbox name='mark6' label='Pleasant location: 6+' />
                    <div className='filter-amount'>74</div>
                </div>

                 <p className='quick-filter-group'>Popular filters</p>


                <div className="quick-filter-item">
                    <Checkbox name='hotels' label='Hotels' />
                    <div className='filter-amount'>356</div>
                </div>
                <div className="quick-filter-item">
                    <Checkbox name='apartaments' label='Apartaments' />
                    <div className='filter-amount'>785</div>
                </div>
                <div className="quick-filter-item">
                    <Checkbox name='hostels' label='Hostels' />
                    <div className='filter-amount'>124</div>
                </div>
                <div className="quick-filter-item">
                    <Checkbox name='motels' label='Motels' />
                    <div className='filter-amount'>758</div>
                </div>


            </div>
            );
    }
}
export default Quickfilter;