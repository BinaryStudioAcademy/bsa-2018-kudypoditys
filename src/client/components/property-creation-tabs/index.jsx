import './index.scss';
import React from 'react';
import { Tab, Container } from 'semantic-ui-react';
import { MenuItems } from "./config";
import { DrawTab } from "./DrawTab";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "./container";

import BasicInfoPropertyRegistrationForm from '../basic-info-property-registration-form';
import FacilitiesPropertyRegistrationForm from '../facilities-property-registration-form';
import PolicesPropertyRegistrationForm from '../polices-property-registration-form';
import PhotoRegistrationPropertyForm from '../photo-registration-property-form';

import PaymentTab from '../property-payment-tab';


export class PropertyRegistration extends React.Component {
    state = {
        activeIndex: 0
    };

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeIndex });
    }

    nextTab = () => {
        const { activeIndex } = this.state;
        this.setState({
            activeIndex: activeIndex + 1
        });
    }

    onFormSubmit = (data) => {
        console.log(data);
    }

    getWizardForms() {
        return [
            {
                key: 'Basic Info',
                icon: 'home',
                content: 'Basic Info',
                header: ' Rooms and pricing',
                subheader: 'Start by telling us your property\'s name, contact details and address.',
                component: <BasicInfoPropertyRegistrationForm onSubmit={
                    this.nextTab
                } />
            },
            {
                key: 'Facilities & services',
                icon: 'bath',
                content: 'Facilities & services',
                header: ' Facilities & services',
                subheader: 'Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.',
                component: <FacilitiesPropertyRegistrationForm onSubmit={
                    this.nextTab
                } />
            },
            {
                key: 'Rules',
                icon: 'clipboard list',
                content: 'Rules',
                header: ' Polices',
                subheader: ' Specify some basic policies. Do you allow children or pets? How flexible are you with cancellations?',
                component: <PolicesPropertyRegistrationForm onSubmit={
                    this.nextTab
                } />,
            },
            {
                key: 'Photo',
                icon: 'photo',
                content: 'Property photos',
                header: '  Property photos',
                subheader: 'Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We will display these photos on your property\'s page on the Booking.com website.',
                component: <PhotoRegistrationPropertyForm onSubmit={
                    (data) => console.log(data)
                } />
            },
            {
                key: 'menuItem Room',
                icon: 'usd',
                content: 'Layout and pricing', //temporary
                header: ' Layout and pricing',
                subheader: ' Tell us about your first room. After entering all the necessary info, you can fill in the details of your other rooms',
                component: <PaymentTab />,
            }
        ];
    }

    getPanes() {
        return this.getWizardForms().map(menuItemForm => ({
            menuItem: menuItemForm,
            render: () =>
                <DrawTab
                    header={menuItemForm.header}
                    subheader={menuItemForm.subheader}
                    component={menuItemForm.component}
                />
        }));
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <Container>
                <Tab
                    menu={{ fluid: true, vertical: true }}
                    menuPosition="left"
                    panes={this.getPanes()}
                    activeIndex={activeIndex}
                    onTabChange={this.handleTabChange}
                />
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyRegistration);


