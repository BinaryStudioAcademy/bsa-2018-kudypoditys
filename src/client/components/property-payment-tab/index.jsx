import React, { Component } from 'react';
import {
    Container,
    Header,
    Segment,
    Radio,
    Divider,
    Dropdown,
    Input,
    Checkbox,
    Label,
} from 'semantic-ui-react';
import './index.scss';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';
import {
    commissionNames,
    cityTaxTypes,
    additionalFeeTypes,
} from './staticData';
import TabForm from './servicesTabForm';

export class PaymentTab extends Component {
    handleChange = (e, { name, value }) => {
        if (value === 'true') {
            value = true;
        } else if (value === 'false') {
            value = false;
        }
        this.props.updateTab({ [name]: value });
    };

    toggleCreditCardsCheck = card => {
        this.props.updateTab({
            paymentCreditCards: {
                ...this.props.paymentCreditCards,
                [card]: !this.props.paymentCreditCards[card],
            },
        });
    };

    handleCityTaxChange = (e, { name, value }) => {
        if (name !== 'includeToPrice') {
            this.props.updateTab({
                cityTaxIndividual: {
                    ...this.props.cityTaxIndividual,
                    [name]: value,
                },
            });
        } else if (name === 'includeToPrice') {
            this.props.updateTab({
                cityTaxIndividual: {
                    ...this.props.cityTaxIndividual,
                    includeToPrice: !this.props.cityTaxIndividual
                        .includeToPrice,
                },
            });
        }
    };

    handleCommissionInput = (e, { name, value }) => {
        this.props.updateTab({
            recipientActualAddress: {
                ...this.props.recipientActualAddress,
                [name]: value,
            },
        });
    };

    addFee = fee => {
        this.props.updateTab({
            additionalFeesOptions: [
                ...this.props.additionalFeesOptions,
                {
                    feeType: this.additionalFeeTypes[0].value,
                    includeToPrice: false,
                    value: '',
                    paymentType: this.cityTaxTypes[0].value,
                },
            ],
        });
    };

    handleAdditionalFees = (e, { name, value }) => {
        console.log(e, name, value);
        const id = Number(name.split(' ')[0]);
        const name_ = name.split(' ')[1];
        if (value === 'true') {
            value = true;
        } else if (value === 'false') {
            value = false;
        }

        if (!name.includes('removeFee') && !name.includes('includeToPrice')) {
            this.props.updateTab({
                additionalFeesOptions: this.props.additionalFeesOptions.map(
                    (option, i) => {
                        if (i == id) {
                            return {
                                ...option,
                                [name_]: value,
                            };
                        } else {
                            return option;
                        }
                    },
                ),
            });
        } else if (name.includes('includeToPrice')) {
            this.props.updateTab({
                additionalFeesOptions: this.props.additionalFeesOptions.map(
                    (option, i) => {
                        if (i == id) {
                            return {
                                ...option,
                                includeToPrice: !option.includeToPrice,
                            };
                        } else {
                            return option;
                        }
                    },
                ),
            });
        } else {
            this.props.updateTab({
                additionalFeesOptions: this.props.additionalFeesOptions.filter(
                    (option, i) => i != id,
                ),
            });
        }
    };

    handleContinue = () => {
        console.log(this.props);
        console.log(this.props.paymentType);

        const images = [];

        this.props.images.forEach(function(item) {
            images.push({
                url: item,
            });
        });
        const facilities = [];
        this.props.facilities.forEach(function(i) {
            facilities.push({
                name: i,
            });
        });
        const paymentTypes = [];

        const TempPaymentTypes = {
            name: this.props.paymentType,
        };
        paymentTypes.push(TempPaymentTypes);
        console.log({paymentTypes: paymentTypes});
        this.props.registerProperty({
            userId: this.props.user.id,
            name: this.props.name,
            address: this.props.address,
            contactPersonName: this.props.contactPersonName,
            contactPhone: this.props.contactPhone,
            rating: this.props.rating,
            images: images,
            facilities: facilities,
            accommodationRule: {
                allowPets: true,
                cancelReservation: true,
                minimumStay: 2,
                arrivalTimeStart: this.props.arrivalFrom,
                arrivalTimeEnd: this.props.arrivalTo,
                departureTimeStart: this.props.departureFrom,
                departureTimeEnd: this.props.departureTo,
            },
            // paymentTypes: paymentTypes,
        });
    };

    render() {
        console.log(this.props);
        const formProps = {
            handleChange: this.handleChange,
            toggleCreditCardsCheck: this.toggleCreditCardsCheck,
            handleCityTaxChange: this.handleCityTaxChange,
            handleCommissionInput: this.handleCommissionInput,
            handleAdditionalFees: this.handleAdditionalFees,
            addFee: this.addFee,
            commissionNames: commissionNames,
            cityTaxTypes: cityTaxTypes,
            additionalFeeTypes: additionalFeeTypes,
            paymentType: this.props.paymentType,
            paymentCreditCards: this.props.paymentCreditCards,
            vatTaxes: this.props.vatTaxes,
            cityTax: this.props.cityTax,
            cityTaxIndividual: this.props.cityTaxIndividual,
            additionalFees: this.props.additionalFees,
            additionalFeesOptions: this.props.additionalFeesOptions,
            commissionName: this.props.commissionName,
            recipientSameAddress: this.props.recipientSameAddress,
            recipientActualAddress: this.props.recipientActualAddress,
        };

        return (
            <Container className="property_payment_tab-wrapper">
                <Container className="property_payment_tab-container">
                    <TabForm {...formProps} onSubmit={this.handleContinue} />
                </Container>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaymentTab);
