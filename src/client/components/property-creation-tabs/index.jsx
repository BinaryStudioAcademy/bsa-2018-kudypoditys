import './index.scss';
import React from 'react';
import { Tab, Container, Header} from 'semantic-ui-react';



export class PropertyCreationTabs extends React.Component {



    render() {

        const panes = [
            {
                menuItem: { key: 'Basic Info', icon: 'home', content: 'Basic Info' }, render: () => <Tab.Pane>
                    <Header as="h2">
                        Welcome %username
                    </Header>
                    <Header as="h4"  style={{paddingBottom: 10, lineHeight: 1.2}}>
                        Start by telling us your property's name, contact details and address.
                    </Header>

                </Tab.Pane> },
            {
                menuItem: { key: 'Layout and pricing', icon: 'usd', content: 'Layout and pricing' }, render: () => <Tab.Pane>
                    <Header as="h2">
                        Rooms and pricing
                    </Header>
                    <Header as="h4"  style={{paddingBottom: 10, lineHeight: 1.2}}>
                        Describe the bed options, common spaces, size, and pricing for each of your apartments.
                    </Header>

                </Tab.Pane> },
            {
                menuItem: { key: 'Facilities & services', icon: 'bath', content: 'Facilities & services' }, render: () => <Tab.Pane>
                    <Header as="h2">
                        Facilities & services
                    </Header>
                    <Header as="h4"  style={{paddingBottom: 10, lineHeight: 1.2}}>
                        Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.
                    </Header>

                </Tab.Pane> },
            {
                menuItem: { key: 'Amenities', icon: 'tv', content: 'Amenities' }, render: () => <Tab.Pane>
                    <Header as="h2">
                        Amenities
                    </Header>
                    <Header as="h4"  style={{paddingBottom: 10, lineHeight: 1.2}}>
                        You are nearly done! We just need a few more details about the extra bed options you provide, plus any amenities or specific features and services available.
                    </Header>

                </Tab.Pane> },
            {
                menuItem: { key: 'Photo', icon: 'photo', content: 'Property photos' }, render: () => <Tab.Pane>
                    <Header as="h2">
                        Property photos
                    </Header>
                    <Header as="h4"  style={{paddingBottom: 10, lineHeight: 1.2}}>
                        Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We will display these photos on your property's page on the Booking.com website.                    </Header>

                </Tab.Pane> },
            {
                menuItem: { key: 'Policies', icon: 'list ol', content: 'Policies' }, render: () => <Tab.Pane>
                    <Header as="h2">
                        Policies
                    </Header>
                    <Header as="h4"  style={{paddingBottom: 10, lineHeight: 1.2}}>
                        Specify some basic policies. Do you allow children or pets? How flexible are you with cancellations?
                    </Header>

                </Tab.Pane> },
            {
                menuItem: { key: 'Payments', icon: 'credit card', content: 'Payments' }, render: () => <Tab.Pane>
                    <Header as="h2">
                        Payments
                    </Header>
                    <Header as="h4"  style={{paddingBottom: 10, lineHeight: 1.2}}>
                        Specify the types of payment you accept, tax details and other options like additional charges.
                    </Header>

                </Tab.Pane> }

        ];
        return (
            <Container>
                <div className="welcome">

                </div>
                <Tab menu={{ fluid: true, vertical: true }} menuPosition="left" panes={panes} />
            </Container>
        )
    }
}


