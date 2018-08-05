import React from 'react';
import './index.scss';
import {Menu, Dropdown} from 'semantic-ui-react';


class RankingBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'price'
        };
    }

    handleItemClick(e, {value}) {
        this.setState({activeItem: value});


    }


    render() {

        const {activeItem} = this.state;

        return (
            <div className='sorting-bar'>
                <Menu widths='5'>

                    <Menu.Item
                        icon='usd'
                        name='Lowest price first'

                        value='price'
                        active={activeItem === 'price'}
                        onClick={this.handleItemClick.bind(this)}
                    />
                    <Menu.Item
                        icon='map marker alternate'
                        name='Distance from city centre'
                        value='distance'
                        active={activeItem === 'distance'}
                        onClick={this.handleItemClick.bind(this)}
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
                                onClick={this.handleItemClick.bind(this)}
                            >
                                stars [5→1]
                            </Dropdown.Item>
                            <Dropdown.Item
                                value='low'
                                active={activeItem === 'low'}
                                onClick={this.handleItemClick.bind(this)}
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

export default RankingBarComponent;