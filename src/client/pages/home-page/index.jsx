import React, { Component, Fragment } from 'react';

import Search from 'client/components/search';
import BannerList from 'client/components/banner-list';
import Header from 'client/components/header';

import Page from 'client/components/page';

export class HomePage extends Component {

    render() {

        return (
            <Page>
                {/* <Header /> */}
                <div className="">

                </div>
                <Search view='bar'
                    destination='Lviv'
                    checkIn={new Date('Aug 14 2018')}
                    checkOut={new Date('Aug 16 2018')}
                    adults={1}
                    rooms={1}
                    children={0}
                    onDestinationChange={value => console.log(`destination: ${value}`)}
                    onCheckInChange={value => console.log(`check-in: ${new Date(value)}`)}
                    onCheckOutChange={value => console.log(`check-in: ${new Date(value)}`)}
                    onAdultsChange={value => console.log(`adults: ${value}`)}
                    onChildrenChange={value => console.log(`children: ${value}`)}
                    onRoomsChange={value => console.log(`rooms: ${value}`)}
                    onSearch={() => console.log('Search propeties!')} />
                <BannerList />

            </Page>
        );
    }
}

