import React from 'react';
import './index.scss';
import {Menu, Dropdown} from 'semantic-ui-react';


export class RankingBar extends React.Component {

    handleItemClick = (event, value) => {

        this.setState({activeItem: value.value});

        console.log(this.state.activeItem)
    };

    constructor(props) {
        super(props);
        this.state = {
            activeItem: price
        };
    }

    render() {

        const {activeItem} = this.state;

        return (
            <div className="sorting-bar">
                <Menu widths="3">

                    <Menu.Item
                        icon="usd"
                        name="Lowest price first"

                        value="price"
                        active={activeItem === "price"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        icon="map marker alternate"
                        name="Distance from city centre"
                        value="distance"
                        active={activeItem === "distance"}
                        onClick={this.handleItemClick}
                    />
                    <Dropdown
                        item
                        text="Stars"
                    >
                        <Dropdown.Menu>
                            <Dropdown.Header


                            >Rating</Dropdown.Header>
                            <Dropdown.Item
                                value="high"
                                active={activeItem === "high"}
                                onClick={this.handleItemClick}
                            >
                                stars [5→1]
                            </Dropdown.Item>
                            <Dropdown.Item
                                value="low"
                                active={activeItem === "low"}
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

const SORT_VALUES = {
    PRICE: 'price',
    DISTANCE: 'distance',
    LOW_RANK: 'low',
    HIGH_RANK: 'high'

};
const price = SORT_VALUES.PRICE;
