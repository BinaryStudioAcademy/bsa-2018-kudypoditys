import React from 'react';
import './index.scss';
import {Divider, Container, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import Search from 'client/components/search';

import AvailabilityPanel from 'client/components/availability-panel';
import Breadcrumbs from 'client/components/breadcrumbs';
import Slider from 'client/components/slider';
import PropertyDescription from 'client/components/property-description';
import {PropertySummary} from "../property-summary";
import {NavigationBar} from "../navigation-bar";

export class PropertyPage extends React.Component {


    render() {
        let propertyItemData = {
            name: 'DREAM Hostel Lviv',
            location: 'Prospekt Gagarina 145, Kharkov, 61124, Ukraine '
        };
        const pics = [
            'https://picsum.photos/600/302',
            'https://picsum.photos/600/303',
            'https://picsum.photos/600/304',
            'https://picsum.photos/600/305',
            'https://picsum.photos/600/306'
        ];

        const sections = [
            { key: 'Main', content: 'Main', link: true },
            { key: 'Country', content: 'Ukraine', link: true },
            { key: 'Region', content: 'Lviv Region', link: true },
            { key: 'City', content: 'Lviv', link: true },
            { key: 'Property', content: 'DREAM Hostel Lviv', active: true }
        ];

        const handleSlideChange = (index) => {
            console.log(`Slide changed to ${index}`);
        };


        return (
            <div className='property-page__wrapper'>


                <Segment>
                    <Breadcrumbs sections={sections} />
                </Segment>

                <Container text className='property-page__wrapper-left_side'>
                    <Search
                        key="Search"
                        view='panel'
                        adults={1}
                        rooms={1}
                        children={0}
                    />
                </Container>

                <Container text className='property-page__wrapper-right_side'>
                    <NavigationBar/>

                    <PropertySummary propertyItemData={propertyItemData}/>
                    <Slider pics={pics} handleSlideChange={handleSlideChange} slideIndex={0}/>

                    <Divider hidden />
                    <div className='property-page__description' style={{width: '100%'}}>
                        <PropertyDescription
                            id='xyz-1'
                            style={{width: '100%'}}
                        />
                    </div>
                    <Divider hidden />

                    <AvailabilityPanel
                        style={{width: '100%'}}
                    />

                </Container>
            </div>

        )
    }


}


PropertyPage.propTypes = {};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);