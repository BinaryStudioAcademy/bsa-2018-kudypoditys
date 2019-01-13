import React, { Component, Fragment } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { RegistrationTypeItem } from "./registrationTypeItem";
import Header from "../../components/header";


class InfoTabRegistration extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Segment >
                    <div style={{
                        marginLeft: '220px',
                        fontSize: '17px',
                        marginBottom: '15px'
                    }}> What do you want to list?</div>
                    <Grid width={9} >
                        <Grid.Row centered  >
                            <Grid.Column width={3} textAlign='center' >
                                <RegistrationTypeItem
                                    image='https://q.bstatic.com/static/img/join
                                    /segmentation/accomm_home_main@2x.png'
                                    header='Home or apartament'
                                    description=' For home-like properties:
                                     Apartaments, vacation homes, guest houses, etc.' />
                            </Grid.Column>
                            <Grid.Column width={3} textAlign='center' >
                                <RegistrationTypeItem
                                    image="https://q.bstatic.com/static/img/join
                                    /segmentation/accomm_hotels_main_v2@2x.png"
                                    header='Hotel, B&Bs and More'
                                    description='For hotel-like properties:
                                    Hotels, condo hotels, hostels, etc.' />
                            </Grid.Column >
                            <Grid.Column width={3} textAlign='center' >
                                <RegistrationTypeItem
                                    image='https://q.bstatic.com/static/img/join
                                    /segmentation/tent-big@2x.png'
                                    header='Alternative Places'
                                    description='For alternative accommodation:
                                    Boats, campgrounds or luxury tents.' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Fragment>
        );
    }
}
export default InfoTabRegistration