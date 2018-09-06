import React from "react";
import {Checkbox, Divider, Dropdown, Header, Icon, Radio, Button, Segment, Label} from "semantic-ui-react";
import {reduxForm, Field} from "redux-form";
import {required} from "client/regexValidationService";
import PaymentTabInput from "./paymentTabInput";


export const PaymentTabForm = (props) => {
    const {
        handleChange,
        toggleCreditCardsCheck,
        handleCityTaxChange,
        handleCommissionInput,
        handleAdditionalFees,
        addFee,
        commissionNames,
        cityTaxTypes,
        paymentType,
        paymentCreditCards,
        vatTaxes,
        cityTax,
        cityTaxIndividual,
        additionalFees,
        additionalFeesOptions,
        additionalFeeTypes,
        commissionName,
        recipientSameAddress,
        recipientActualAddress
    } = props;
    return (
        <form onSubmit={props.handleSubmit}>
            <Segment className='property_payment_tab-segment'>
                <Header as="h4">Ways of payment for guests</Header>
                <p>Can you write off money from credit cards in your facility through a POS-terminal?</p>
                <Segment compact className='property_payment_tab-radio-segment'>
                    <Radio name="paymentType" checked={paymentType === "creditcards"} value="creditcards" label="Yes"
                           onChange={handleChange}/>
                </Segment>
                <Segment compact className='property_payment_tab-radio-segment'>
                    <Radio name="paymentType" checked={paymentType === "cash"} value="cash" label="No"
                           onChange={handleChange}/>
                </Segment>

                {
                    paymentType === "creditcards" ?
                        <div className='property_payment_tab-switched-segment'>
                            <Checkbox name="mastercard" label="Euro/Mastercard"
                                      onChange={() => toggleCreditCardsCheck("mastercard")}
                                      checked={paymentCreditCards.mastercard}/>
                            <Checkbox name="visa" label="VISA" onChange={() => toggleCreditCardsCheck("visa")}
                                      checked={paymentCreditCards.visa}/>
                        </div>
                        :
                        <p>We will inform guests that you accept payment only in cash.</p>
                }
            </Segment>
            <Segment>
                <Header as="h4">VAT, city tax and additional charges</Header>
                <p>Please include VAT and city tax</p>

                <Divider hidden/>

                <Header as="h5">VAT/taxes</Header>
                <Radio className='property_payment_tab-radio' name="vatTaxes" checked={vatTaxes === "default"}
                       value="default" label="By default" onChange={handleChange}/>
                <Radio className='property_payment_tab-radio' name="vatTaxes" checked={vatTaxes === "none"} value="none"
                       label="I do not need to pay VAT" onChange={handleChange}/>

                <Divider hidden/>

                <Header as="h5">City tax</Header>
                <Radio className='property_payment_tab-radio' name="cityTax" checked={cityTax === "default"}
                       value="default" label="By default" onChange={handleChange}/>
                <Radio className='property_payment_tab-radio' name="cityTax" checked={cityTax === "individual"}
                       value="individual" label="Individual" onChange={handleChange}/>

                {
                    cityTax === "individual" ?
                        <div className='property_payment_tab-city-tax'>
                            <div className='property_payment_tab-city-tax-node'>
                                <span>City tax</span>
                                <Field
                                    component={PaymentTabInput}
                                    name="value"
                                    onChange={(e) => handleCityTaxChange(e, e.target)}
                                    type="number"
                                    pholder="0.00"
                                    val={cityTaxIndividual.value}
                                    validate={[required]}
                                />
                            </div>
                            <div className='property_payment_tab-city-tax-node'>
                                <span>City tax type</span>
                                <Dropdown name="type" defaultValue={cityTaxIndividual.type} selection
                                          options={cityTaxTypes} onChange={handleCityTaxChange}/>
                            </div>
                            <div className='property_payment_tab-city-tax-node'>
                                <Checkbox name="includeToPrice" onChange={handleCityTaxChange}
                                          checked={cityTaxIndividual.includeToPrice}
                                          label="Include city tax into the price"/>
                            </div>

                        </div> : null
                }

                <Divider hidden/>

                <div className="property_payment_tab-additional-fees-container">
                    <p>Will there be additional fees for guests at your accommodation facility</p>
                    <Segment compact className='property_payment_tab-radio-segment'>
                        <Radio name="additionalFees" checked={additionalFees === true} value="true" label="Yes"
                               onChange={handleChange}/>
                    </Segment>
                    <Segment compact className='property_payment_tab-radio-segment'>
                        <Radio name="additionalFees" checked={additionalFees === false} value="false" label="No"
                               onChange={handleChange}/>
                    </Segment>

                    {additionalFees ?
                        <React.Fragment>
                            {
                                additionalFeesOptions.map((option, i) => (
                                    <div className="property_payment_tab-addition-fee-container" key={i}>
                                        <Dropdown name={`${i} feeType`} onChange={handleAdditionalFees}
                                                  defaultValue={additionalFeeTypes[0].value} selection
                                                  options={additionalFeeTypes}/>
                                        <Field
                                            component={PaymentTabInput}
                                            name={`${i} value`}
                                            onChange={(e) => handleAdditionalFees(e, e.target)}
                                            type="number"
                                            pholder="0.00"
                                            val={option.value}
                                            validate={[required]}
                                        />

                                        <Dropdown name={`${i} paymentType`} defaultValue={cityTaxTypes[0].value}
                                                  selection options={cityTaxTypes} onChange={handleAdditionalFees}/>
                                        <Checkbox name={`${i} includeToPrice`} onChange={handleAdditionalFees}
                                                  checked={option.includeToPrice === true} label="Include to price"/>
                                        <Label as="a" basic name={`${i} removeFee`} onClick={handleAdditionalFees}><Icon
                                            name='delete'/>Remove</Label>
                                    </div>
                                ))
                            }
                            <Label as="a" basic name="addFee" onClick={addFee}>Add fee</Label>
                        </React.Fragment>
                        :
                        null
                    }
                </div>

                <Divider hidden/>
            </Segment>
            <Segment className='property_payment_tab-commission'>
                <Header as="h4">Commission remuneration</Header>
                <p>What name should be indicated in the invoices (for example, legal / company name)?</p>
                <Dropdown name="commissionName" placeholder="Select name" defaultValue={commissionNames[0].value}
                          selection options={commissionNames} onChange={handleChange}/>
                <p>Does the recipient have the same address as your accommodation?</p>
                <Segment compact className='property_payment_tab-radio-segment'>
                    <Radio name="recipientSameAddress" checked={recipientSameAddress} value="true" label="Yes"
                           onChange={handleChange}/>
                </Segment>
                <Segment compact className='property_payment_tab-radio-segment'>
                    <Radio name="recipientSameAddress" checked={!recipientSameAddress} value="false" label="No"
                           onChange={handleChange}/>
                </Segment>
                {
                    !recipientSameAddress ?
                        <div className='property_payment_tab-switched-commission'>
                            <Field
                                component={PaymentTabInput}
                                name="country"
                                onChange={(e) => handleCommissionInput(e, e.target)}
                                pholder="0.00"
                                value={recipientActualAddress.country}
                                opts={{label: "Country"}}
                                type="text"
                                pholder="ex: Canada"
                                validate={[required]}
                            />
                            <Field
                                component={PaymentTabInput}
                                name="city"
                                onChange={(e) => handleCommissionInput(e, e.target)}
                                pholder="0.00"
                                value={recipientActualAddress.city}
                                opts={{label: "City"}}
                                type="text"
                                pholder="ex: Ottawa"
                                validate={[required]}
                            />
                            <Field
                                component={PaymentTabInput}
                                name="address"
                                onChange={(e) => handleCommissionInput(e, e.target)}
                                pholder="0.00"
                                value={recipientActualAddress.address}
                                opts={{label: "Address"}}
                                type="text"
                                pholder="ex: West Hastings Street, S 100"
                                validate={[required]}
                            />
                            <Field
                                component={PaymentTabInput}
                                name="postcode"
                                onChange={(e) => handleCommissionInput(e, e.target)}
                                pholder="0.00"
                                value={recipientActualAddress.postcode}
                                opts={{label: "Postcode"}}
                                type="text"
                                pholder="ex: XXXXX"
                                validate={[required]}
                            />
                        </div> : null
                }

                <Divider hidden/>
            </Segment>
            <Button fluid primary className="property_services_tab-continue-btn"
                    disabled={props.submitting}>Submit</Button>
        </form>
    )
}

export default reduxForm({
    form: "paymentTab"
})(PaymentTabForm);