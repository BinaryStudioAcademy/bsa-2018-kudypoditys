import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Grid, Dropdown} from "semantic-ui-react";
import PropTypes from "prop-types";
import history from "../../history";
import MainSearch from "../../components/search";
import AuthHOC from "../../components/common/auth-hoc";
import UserPopup from "../../components/header/user-popup";
import "./index.scss";
import {mapStateToProps, mapDispatchToProps} from "./container";

export class MainHeader extends Component {
    componentDidMount() {
    }

    logoutClicked = () => {
        this.props.logout();
    };

	getCurrencies() {
        const {currencies} = this.props;
        return currencies.map(x => ({
            key: x.id,
            value: x.id,
            text: x.codeTitle
        }))

    };

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

    handleCurrancyChange = (e, {value}) => {
        const {currencies} = this.props;
        const currency = currencies.find(x => x.id === value);
        this.props.onCurrencyChange(currency);

        localStorage.setItem('selectedCurrency', JSON.stringify(currency));
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {currentUser, hideSignUpIn, noBackground} = this.props;
        const currenciesOptions = this.getCurrencies();
        return (
            <div
                className="header--wraper"
                style={
                    noBackground
                        ? {
                            backgroundImage: "none"
                        }
                        : {backgroundColor: "#028fc5"}
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
                            <Dropdown
                                style={{
                                    paddingTop: "6px",
                                    width: "90px",
                                    fontSize: "14px",
                                    background: "none",
                                    color: "#fff",
                                    border: "none",
                                    float: "right",
                                    opacity: "0.94"
                                }}
                                name="preferredCurrency"
                                fluid
                                selection
                                value={this.props.selectedCurrency.id}
                                options={currenciesOptions}
                                onChange={this.handleCurrancyChange}
                            />
                            <AuthHOC
                                Component={() => {
                                    return (
                                        <Fragment>
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

                                                    <a
                                                        style={{
                                                            cursor: "pointer",
                                                            marginRight: "24px",
                                                            fontSize: 16,
                                                            top: 4,
                                                            position: 'relative'
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
                                                            top: 4,
                                                            position: 'relative'
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
                            <Grid.Column width={16} style={{marginTop: 45}}>
                                <MainSearch
                                    view="bar"
                                    destination="Lviv"
                                    checkIn={(new Date("Aug 14 2018")).getTime()}
                                    checkOut={(new Date("Aug 16 2018")).getTime()}
                                    adults={1}
                                    rooms={1}
                                    children={0}
                                    onDestinationChange={
                                      this.props.onDestinationChange
                                    }
                                    onCheckInChange={
                                      this.props.onCheckInChange
                                    }
                                    onCheckOutChange={
                                      this.props.onCheckOutChange
                                    }
                                    onAdultsChange={
                                      this.props.onAdultsChange
                                    }
                                    onChildrenChange={
                                      this.props.onChildrenChange
                                    }
                                    onRoomsChange={
                                      this.props.onRoomsChange
                                    }
                                    handleSearchResults={
                                        this.props.handleSearchResults
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
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            codeTitle: PropTypes.string.isRequired
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
