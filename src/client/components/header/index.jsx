import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Dropdown, Button, Menu, Grid} from "semantic-ui-react";
import PropTypes from "prop-types";
import history from "client/history";
import Search from "client/components/search";

import "./index.scss";
import {mapStateToProps, mapDispatchToProps} from "./container";

export class MainHeader extends Component {
    logout = () => {
        this.props.logout();
    };

    login = () => {
        history.push("/login");
    };

    state = {activeItem: "about-us"};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {currencies, selectedCurrency, currentUser} = this.props;

        return (
            <div className="header--wraper">
                <Grid centered className={"grid--main"}>
                    <Grid.Row columns={2} className={"row--inform"}>
                        <Grid.Column width={8} textAlign={"left"}>
                            Kudypoditys
                        </Grid.Column>
                        <Grid.Column width={8} textAlign={"right"}>
                            <a style={{marginRight: "24px"}}>EN</a>{" "}
                            <a onClick={this.login}>Login</a>
                        </Grid.Column>
                    </Grid.Row>
                    {this.props.showSearch ? (
                        <Grid.Row centered columns={1}>
                            <Grid.Column width={16}>
                                <Search
                                    view="bar"
                                    destination="Lviv"
                                    checkIn={new Date("Aug 14 2018")}
                                    checkOut={new Date("Aug 16 2018")}
                                    adults={1}
                                    rooms={1}
                                    children={0}
                                    onDestinationChange={value =>
                                        console.log(`destination: ${value}`)
                                    }
                                    onCheckInChange={value =>
                                        console.log(
                                            `check-in: ${new Date(value)}`
                                        )
                                    }
                                    onCheckOutChange={value =>
                                        console.log(
                                            `check-in: ${new Date(value)}`
                                        )
                                    }
                                    onAdultsChange={value =>
                                        console.log(`adults: ${value}`)
                                    }
                                    onChildrenChange={value =>
                                        console.log(`children: ${value}`)
                                    }
                                    onRoomsChange={value =>
                                        console.log(`rooms: ${value}`)
                                    }
                                    onSearch={() =>
                                        console.log("Search propeties!")
                                    }
                                />
                            </Grid.Column>
                        </Grid.Row>
                    ) : null}
                </Grid>
            </div>
        );
    }
}

MainHeader.propTypes = {
    currencies: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })
    ).isRequired,
    currentUser: PropTypes.shape({
        fullName: PropTypes.string.isRequired
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainHeader);
