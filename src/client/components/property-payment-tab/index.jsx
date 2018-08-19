import React, { Component } from "react";
import { Container, Header, Segment, Radio, Divider, Dropdown, Input, Checkbox, Label } from "semantic-ui-react";
import "./index.scss";
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';
import TabForm from "./servicesTabForm";

export class PaymentTab extends Component {

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

    addFee = (fee) => {
        this.props.updateTab({
            additionalFeesOptions: [
                ...this.props.additionalFeesOptions,
                {
                    feeType: this.additionalFeeTypes[0].value,
                    includeToPrice: false,
                    value: "",
                    paymentType: this.cityTaxTypes[0].value
                }
            ]
        })
    };

    handleAdditionalFees = (e, { name, value }) => {
        console.log(e, name, value);
        const id =  Number(name.split(" ")[0]);
        const name_ = name.split(" ")[1];
        if(value === "true") {
            value = true;
        } else if(value === "false") {
            value = false;
        }

        if(!name.includes("removeFee") && !name.includes("includeToPrice")) {
            this.props.updateTab({
                additionalFeesOptions: this.props.additionalFeesOptions.map((option, i) => {
                    if(i == id) {
                        return {
                            ...option,
                            [name_]: value
                        }
                    } else {
                        return option;
                    }
                })
            })
        } else if(name.includes("includeToPrice")) {
            this.props.updateTab({
                additionalFeesOptions: this.props.additionalFeesOptions.map((option, i) => {
                    if(i == id) {
                        return {
                            ...option,
                            includeToPrice: !option.includeToPrice
                        }
                    } else {
                        return option;
                    }
                })
            })
        } else {
            this.props.updateTab({
                additionalFeesOptions: this.props.additionalFeesOptions.filter((option, i) => i != id)
            })
        }
    };

    handleContinue = (data) => {
        console.log(data);
    };

    commissionNames = [
        {
            key: "1",
            text: "Name one",
            value: "Name one"
        },
        {
            key: "2",
            text: "Name two",
            value: "Name two"
        },
        {
            key: "3",
            text: "Name three",
            value: "Name three"
        }
    ];

    cityTaxTypes = [
        {
            key: "1",
            text: "%",
            value: "percent"
        },
        {
            key: "2",
            text: "USD for accommodation",
            value: "usd_accommodation"
        },
        {
            key: "3",
            text: "USD for night",
            value: "usd_night"
        },
        {
            key: "4",
            text: "none",
            value: "none"
        }
    ];

    additionalFeeTypes = [
        {
            key: "1",
            value: "service_charge",
            text: "Service charge"
        },
        {
            key: "2",
            value: "resort_fee",
            text: "Resort fee"
        },
        {
            key: "3",
            value: "cleaning_fee",
            text: "Cleaning fee"
        },
        {
            key: "4",
            value: "towel_fee",
            text: "Towel fee"
        },
        {
            key: "5",
            value: "charge_for_electricity",
            text: "Charge for electricity"
        },
        {
            key: "6",
            value: "bed_linen",
            text: "Bed linen"
        },
        {
            key: "7",
            value: "payment_for_gas",
            text: "Payment for gas"
        },
        {
            key: "8",
            value: "charge_for_fuel",
            text: "Charge for fuel"
        },
        {
            key: "9",
            value: "fee_for_firewood",
            text: "Fee for firewood"
        },
        {
            key: "10",
            value: "water_usage_fee",
            text: "Water usage fee"
        },
        {
            key: "11",
            value: "local_fee",
            text: "Local fee"
        },
        {
            key: "12",
            value: "environmental_fee",
            text: "Environmental fee"
        },
        {
            key: "13",
            value: "fee_for_access_to_the_spa",
            text: "Fee for access to the spa"
        },
        {
            key: "14",
            value: "transfer_fee",
            text: "Transfer fee"
        }
    ];

    render() {
        const formProps = {
            handleChange: this.handleChange,
            toggleCreditCardsCheck: this.toggleCreditCardsCheck,
            handleCityTaxChange: this.handleCityTaxChange,
            handleCommissionInput: this.handleCommissionInput,
            handleAdditionalFees: this.handleAdditionalFees,
            addFee: this.addFee,
            commissionNames: this.commissionNames,
            cityTaxTypes: this.cityTaxTypes,
            additionalFeeTypes: this.additionalFeeTypes,
            paymentType: this.props.paymentType,
            paymentCreditCards: this.props.paymentCreditCards,
            vatTaxes: this.props.vatTaxes,
            cityTax: this.props.cityTax,
            cityTaxIndividual: this.props.cityTaxIndividual,
            additionalFees: this.props.additionalFees,
            additionalFeesOptions: this.props.additionalFeesOptions,
            commissionName: this.props.commissionName,
            recipientSameAddress: this.props.recipientSameAddress,
            recipientActualAddress: this.props.recipientActualAddress
        };

        return (
            <Container className='property_payment_tab-wrapper'>
                <Header as="h2">
                    Payment
                </Header>
                <Container className='property_payment_tab-container'>
                    <TabForm {...formProps} onSubmit={this.handleContinue} />
                </Container>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTab);
