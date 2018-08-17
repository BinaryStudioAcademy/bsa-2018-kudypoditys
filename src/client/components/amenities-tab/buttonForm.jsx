import React, { Component, Fragment } from "react";
import { Card, Button, CardDescription, Container } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form'
import ButtonWithCheckbox from './buttonWithCkheckbox';




class ButtonTab extends Component {
    constructor() {
		super();
		this.state = {
			shown:false,
		};
	}
    toggleAddAmenities() {
		this.setState({
			shown: !this.state.shown
		});
	}

    render() {
        var shown = {
			display: this.state.shown ? "block" : "none"
		};
        return (
            <Fragment >
                <Card style={{ width: '1000px' }} >
                    <ButtonWithCheckbox toggleAddAmenities={this.toggleAddAmenities.bind(this)} contentTitle="Room amenities" isShown={shown}
                        fieldsDataList={[{ label: "Clothes rack", name: "Clothes rack" }]} />
                    <ButtonWithCheckbox toggleAddAmenities={this.toggleAddAmenities.bind(this)} contentTitle="Bathroom" isShown={shown}
                        fieldsDataList={[{ label: " Spa tub", name: " Spa tub" }]} />
                  < ButtonWithCheckbox toggleAddAmenities={this.toggleAddAmenities.bind(this)} contentTitle="Media & Technology" isShown={shown}
                        fieldsDataList={[{ label: "Computer", name: "Computer" }]} />
                   < ButtonWithCheckbox toggleAddAmenities={this.toggleAddAmenities.bind(this)} contentTitle="Food & Drink" isShown={shown}
                        fieldsDataList={[{ label: "Dining area", name: "Dining area" }]} />
                   <ButtonWithCheckbox toggleAddAmenities={this.toggleAddAmenities.bind(this)} contentTitle="Services & Extras" isShown={shown}
                        fieldsDataList={[{ label: " Executive Lounge Access", name: " Executive Lounge Access" }]} />
                    <ButtonWithCheckbox toggleAddAmenities={this.toggleAddAmenities.bind(this)} contentTitle="Outdoor & View" isShown={shown}
                        fieldsDataList={[{ label: "Balcony", name: "Balcony" }]} />
                    <ButtonWithCheckbox toggleAddAmenities={this.toggleAddAmenities.bind(this)} contentTitle='Building Characteristics' isShown={shown}
                        fieldsDataList={[{ label: "Detached", name: "Detached" }]} />
                     <ButtonWithCheckbox toggleAddAmenities={this.toggleAddAmenities.bind(this)} contentTitle='Entertainment & Family Services' isShown={shown}
                        fieldsDataList={[{ label: "Board games/puzzles", name: "Board games/puzzles" }]} />

                </Card>
            </Fragment>
        )
    }

}
ButtonTab = reduxForm({
    form: "ButtonTab"
})(ButtonTab);

export default ButtonTab