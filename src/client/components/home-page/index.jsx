import React, { Component, Fragment } from 'react';

import Search from 'client/components/search';
import BannerList from 'client/components/banner-list';
import Header from 'client/components/header';
import cookies from 'browser-cookies';

export class HomePage extends Component {

    render() {
        cookies.set('myTestJwtCookie', '{ jwtjwtilovejwt }');

        console.log(
            cookies.get('myTestJwtCookie')
        );

        return (
            <Fragment>
                <Header />
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

            </Fragment>
        );
    }
}

