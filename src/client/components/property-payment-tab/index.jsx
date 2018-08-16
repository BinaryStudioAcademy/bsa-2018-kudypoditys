import React, { Component } from "react";
import { Container, Header, Segment, Radio, Divider, Dropdown, Input, Checkbox, Label } from "semantic-ui-react";
import "./index.scss";
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';

export class PaymentTab extends Component {

    state = {
        radioGuests: "1",
        radioVAT: "0",
        radioTax: "0",
        radioCommission: "0",
        cityTaxValue: "",
        cityTaxCheck: false,
        cityTaxType: "percent",
        billNameOption: "",
        mastercardCC: false,
        visaCC: false
    };

    handleChange = (e, { name, value }) => {
        if(value === "true") {
            value = true
        }
        else if (value === "false") {
            value = false
        }
        this.props.updateTab({ [name]: value });
    };

    toggleCreditCardsCheck = (card) => {
        this.props.updateTab({
            paymentCreditCards: {
                ...this.props.paymentCreditCards,
                [card]: !this.props.paymentCreditCards[card]
            }
        });
    };

    handleCityTaxChange = (e, {name, value}) => {
        if(name !== 'includeToPrice') {
            this.props.updateTab({
                cityTaxIndividual: {
                    ...this.props.cityTaxIndividual,
                    [name]: value
                }
            });
        } else if(name === 'includeToPrice'){
            this.props.updateTab({
                cityTaxIndividual: {
                    ...this.props.cityTaxIndividual,
                    includeToPrice: !this.props.cityTaxIndividual.includeToPrice
                }
            });
        }
    };

    handleCommissionInput = (e, { name, value}) => {
        this.props.updateTab({
            recipientActualAddress: {
                ...this.props.recipientActualAddress,
                [name]: value
            }
        });
    };

    commissionName = [
        {
            text: "Name one",
            value: "Name one"
        },
        {
            text: "Name two",
            value: "Name two"
        },
        {
            text: "Name three",
            value: "Name three"
        }
    ];

    cityTaxTypes = [
        {
            text: "%",
            value: "percent"
        },
        {
            text: "USD for accommodation",
            value: "usd_accommodation"
        },
        {
            text: "USD for night",
            value: "usd_night"
        },
        {
            text: "none",
            value: "none"
        }
    ];

    render() {
        console.log(this.props);
        return (
            <Container className='property_payment_tab-wrapper'>
                <Header as="h2">
                    Payment
                </Header>
                <Container className='property_payment_tab-container'>
                    <Segment className='property_payment_tab-segment'>
                        <Header as="h4">Ways of payment for guests</Header>
                        <p>Can you write off money from credit cards in your facility through a POS-terminal?</p>
                        <Segment compact className='property_payment_tab-radio-segment'>
                            <Radio name="paymentType" checked={this.props.paymentType === "creditcards"} value="creditcards" label="Yes" onChange={this.handleChange}/>
                        </Segment>
                        <Segment compact className='property_payment_tab-radio-segment'>
                            <Radio name="paymentType" checked={this.props.paymentType === "cash"} value="cash" label="No" onChange={this.handleChange}/>
                        </Segment>

                        {
                            this.props.paymentType === "creditcards" ?
                                <div className='property_payment_tab-switched-segment'>
                                    <Checkbox name="mastercard" label="Euro/Mastercard" onChange={() => this.toggleCreditCardsCheck("mastercard")} checked={this.props.paymentCreditCards.mastercard} />
                                    <Checkbox name="visa" label="VISA" onChange={() => this.toggleCreditCardsCheck("visa")} checked={this.props.paymentCreditCards.visa} />
                                </div>
                                :
                                <p>We will inform guests that you accept payment only in cash.</p>
                        }
                    </Segment>
                    <Segment>
                        <Header as="h4">VAT, city tax and additional charges</Header>
                        <p>Please include VAT and city tax</p>

                        <Divider hidden />

                        <Header as="h5">VAT/taxes</Header>
                        <Radio className='property_payment_tab-radio' name="vatTaxes" checked={this.props.vatTaxes === "default"} value="default" label="By default" onChange={this.handleChange}/>
                        <Radio className='property_payment_tab-radio' name="vatTaxes" checked={this.props.vatTaxes === "none"} value="none" label="I do not need to pay VAT" onChange={this.handleChange}/>

                        <Divider hidden />

                        <Header as="h5">City tax</Header>
                        <Radio className='property_payment_tab-radio' name="cityTax" checked={this.props.cityTax === "default"} value="default" label="By default" onChange={this.handleChange}/>
                        <Radio className='property_payment_tab-radio' name="cityTax" checked={this.props.cityTax === "individual"} value="individual" label="Individual" onChange={this.handleChange}/>

                        {
                            this.props.cityTax === "individual" ?
                                <div className='property_payment_tab-city-tax'>
                                    <div className='property_payment_tab-city-tax-node'>
                                        <span>City tax</span>
                                        <Input name="value" onChange={this.handleCityTaxChange} value={this.props.cityTaxIndividual.value} />
                                    </div>
                                    <div className='property_payment_tab-city-tax-node'>
                                        <span>City tax type</span>
                                        <Dropdown name="type" defaultValue={this.props.cityTaxIndividual.type} selection options={this.cityTaxTypes} onChange={this.handleCityTaxChange}/>
                                    </div>
                                    <div className='property_payment_tab-city-tax-node'>
                                        <Checkbox name="includeToPrice" onChange={this.handleCityTaxChange} checked={this.props.cityTaxIndividual.includeToPrice} label="Include city tax into the price"/>
                                    </div>

                                </div> : null
                        }

                        <Divider hidden />
                    </Segment>
                    <Segment className='property_payment_tab-commission'>
                        <Header as="h4">Commission remuneration</Header>
                        <p>What name should be indicated in the invoices (for example, legal / company name)?</p>
                        <Dropdown name="commissionName" placeholder="Select name" defaultValue={this.commissionName[0].value} selection options={this.commissionName} onChange={this.handleChange}/>
                        <p>Does the recipient have the same address as your accommodation?</p>
                        <Segment compact className='property_payment_tab-radio-segment'>
                            <Radio name="recipientSameAddress" checked={this.props.recipientSameAddress} value="true" label="Yes" onChange={this.handleChange}/>
                        </Segment>
                        <Segment compact className='property_payment_tab-radio-segment'>
                            <Radio name="recipientSameAddress" checked={!this.props.recipientSameAddress} value="false" label="No" onChange={this.handleChange}/>
                        </Segment>
                        {
                            !this.props.recipientSameAddress ?
                                <div className='property_payment_tab-switched-commission'>
                                    <Input name='country' onChange={this.handleCommissionInput} value={this.props.recipientActualAddress.country} label='Country' placeholder='ex: Canada' />
                                    <Input name='city' onChange={this.handleCommissionInput} value={this.props.recipientActualAddress.city} label='City' placeholder='ex: Ottawa' />
                                    <Input name='address' onChange={this.handleCommissionInput} value={this.props.recipientActualAddress.address} label='Address' placeholder='ex: West Hastings Street, S 100' />
                                    <Input name='postcode' onChange={this.handleCommissionInput} value={this.props.recipientActualAddress.postcode} label='Postcode' placeholder='XXXXX' />
                                </div> : null
                        }

                        <Divider hidden/>
                    </Segment>
                </Container>


            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTab);
