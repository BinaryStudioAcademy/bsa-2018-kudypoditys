import React from 'react';
import './index.scss';
import {Menu, Dropdown} from 'semantic-ui-react';


export class RankingBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'price'
        };
    }

    handleItemClick = (event, {value}) => {
        this.setState({activeItem: value});


        console.log(this.state.activeItem)
    };


    render() {

        const {activeItem} = this.state;

        return (
            <div className='sorting-bar'>
                <Menu widths='3'>

                    <Menu.Item
                        icon='usd'
                        name='Lowest price first'

                        value='price'
                        active={activeItem === 'price'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        icon='map marker alternate'
                        name='Distance from city centre'
                        value='distance'
                        active={activeItem === 'distance'}
                        onClick={this.handleItemClick}
                    />
                    <Dropdown
                        item
                        text='Stars'
                    >
                        <Dropdown.Menu>
                            <Dropdown.Header


                            >Rating</Dropdown.Header>
                            <Dropdown.Item
                                value='hi'
                                active={activeItem === 'hi'}
                                onClick={this.handleItemClick}
                            >
                                stars [5→1]
                            </Dropdown.Item>
                            <Dropdown.Item
                                value='low'
                                active={activeItem === 'low'}
                                onClick={this.handleItemClick}
                            >
                                stars [1→5]
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>


                </Menu>


            </div>
        )
    }


}
