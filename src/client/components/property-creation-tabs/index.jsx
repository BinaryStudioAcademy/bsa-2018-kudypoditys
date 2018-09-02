import './index.scss';
import React from 'react';
import { Tab, Container } from 'semantic-ui-react';
import { MenuItems } from "./config";
import { DrawTab } from "./DrawTab";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "./container";
import BasicInfoPropertyRegistrationForm from '../basic-info-property-registration-form';
import ServicesTab from '../property-services-tab';

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
                component: <BasicInfoPropertyRegistrationForm onSubmit={this.nextTab} />
            },
            {
                key: 'Facilities & services',
                icon: 'bath',
                content: 'Facilities & services',
                header: ' Facilities & services',
                subheader: 'Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.',
                component: <ServicesTab />
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


