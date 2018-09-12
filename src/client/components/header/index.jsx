import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid, Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";
import history from "client/history";
import MainSearch from "client/components/search";
import AuthHOC from "client/components/auth-hoc";
import UserPopup from "client/components/header-user-popup";
import "./index.scss";
import { mapStateToProps, mapDispatchToProps } from "./container";
import Currency from "./currency"
import { options } from '../checkin-checkout/config';
import currencyOptions from 'client/components/user-cabinet-settings/staticData.js'

export class MainHeader extends Component {

    componentDidMount() {
        this.props.getCurrencies();
    }
    logoutClicked = () => {
        this.props.logout();
    };


    getCurrencies() {
        const { currencies } = this.props;
        return currencies.map(x => ({
            key: x.id,
            value: x.id,
            text: x.name
        }))
    }


    addPropertyClicked = () => {
        history.push("/add-property");
    };

    loginClicked = () => {
        history.push("/login");
    };

    registerClicked = () => {
        history.push("/signup");
    };

    logoClicked = () => {
        history.push("/");
    };

    onWellcomeClicked = () => {
        history.push("/user-cabinet");
    };

    state = { activeItem: "about-us" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleCurrancyChange = (e, { name, value }) => {
        this.props.getCityInfos(value);
        console.log(value)
        this.props.onCurrencyChange(value)

    }
    updateUserCurrency = (e, { name, value }) => {
        this.props.onCurrencyChange(value)
        this.props.getCityInfos(value);
        const data = {
            id: this.props.currentUser.id,
            preferredCurrency: value
        };
        this.props.sendSettings(data);



    }
    render() {
        const { currentUser, hideSignUpIn, noBackground } = this.props;
        const currenciesOptions = this.getCurrencies();
        return (
            <div
                className="header--wraper"
                style={
                    noBackground
                        ? {
                            backgroundImage: "none"
                        }
                        : { backgroundColor: "#028fc5" }
                }
            >
                <Grid centered className={"grid--main"}>
                    <Grid.Row columns={2} className={"row--inform"}>
                        <Grid.Column width={8} textAlign={"left"}>
                            <div
                                className="header-logo"
                                onClick={this.logoClicked}
                            >
                                <p>Kudypoditys </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={8} textAlign={"right"}>
                            <AuthHOC
                                Component={() => {
                                    return (
                                        <Fragment>
                                            <Dropdown
                                                style={{
                                                    width: "70px",
                                                    fontSize: "14px",
                                                    //padding:"3px 5px",
                                                    background: "none",
                                                    color: "#fff",
                                                    border: "none",
                                                    float: "right",
                                                    opacity: "0.94"
                                                }}
                                                name="preferredCurrency"
                                                fluid
                                                selection
                                                options={this.props.currencies}
                                                defaultValue={currentUser.preferredCurrency}
                                                onChange={this.updateUserCurrency}
                                            />
                                            <UserPopup
                                                currentUser={currentUser}
                                                logoutClicked={
                                                    this.logoutClicked
                                                }
                                                addPropertyClicked={
                                                    this.addPropertyClicked
                                                }
                                            />
                                        </Fragment>
                                    );
                                }}
                                ElseComponent={() => {
                                    return (
                                        <Fragment>
                                            {hideSignUpIn ? null : (
                                                <Fragment>
                                                    <Dropdown
                                                        style={{
                                                            width: "70px",
                                                            fontSize: "14px",
                                                            //padding:"3px 5px",
                                                            background: "none",
                                                            color: "#fff",
                                                            border: "none",
                                                            float: "right",
                                                            opacity: "0.94"
                                                        }}
                                                        name="preferredCurrency"
                                                        fluid
                                                        selection
                                                        options={currenciesOptions}
                                                        defaultValue={this.props.selectedCurrency}
                                                        onChange={this.handleCurrancyChange}
                                                    />
                                                    <a
                                                        style={{
                                                            cursor: "pointer",
                                                            marginRight: "24px",
                                                            fontSize: 16,
                                                            opacity: 0.8
                                                        }}
                                                        onClick={
                                                            this.loginClicked
                                                        }
                                                    >
                                                        {" "}
                                                        Login
                                                    </a>
                                                    <a
                                                        style={{
                                                            cursor: "pointer",
                                                            fontSize: 16,
                                                            opacity: 0.8
                                                        }}
                                                        onClick={
                                                            this.registerClicked
                                                        }
                                                    >
                                                        Register
                                                    </a>
                                                </Fragment>
                                            )}
                                        </Fragment>
                                    );
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    {this.props.showSearch ? (
                        <Grid.Row centered columns={1}>
                            <Grid.Column width={16} style={{ marginTop: 45 }}>
                                <MainSearch
                                    view="bar"
                                    destination="Lviv"
                                    checkIn={new Date("Aug 14 2018")}
                                    checkOut={new Date("Aug 16 2018")}
                                    adults={1}
                                    rooms={1}
                                    children={0}
                                    handleSearchResults={
                                        this.props.handleSearchResults
                                    }
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

/*MainHeader.propTypes = {
    currencies: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })
    ).isRequired,
    currentUser: PropTypes.shape({
        fullName: PropTypes.string.isRequired
    })
};*/

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainHeader);
