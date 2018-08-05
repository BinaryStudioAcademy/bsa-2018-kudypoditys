import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container } from 'semantic-ui-react';
import 'client/components/region-banner-component/index.scss';
import birka from 'client/components/region-banner-component/img/birka.svg'

/*

{
    id: number,
    city: string,
    flagUrl: string,
    properties: number,
    avgPrice: number
    pictureUrl: string
}



*/

class BannerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cityInfo, onCardClick } = this.props;
        const imgStyles = (url) => ({
            background: `url(${url})`,
            backgroundSize: 'cover',

        });

        return (
            // <Container onClick={onCardClick} className="banner">
            //     <div className="banner-header">
            //         <h4 className="title  flag-icon flag-icon-ua">{cityInfo.city}
            //             <img src={cityInfo.flagUrl} alt="/" style={{ width: 59 }} />
            //         </h4>

            //         <h5 className="subtitle">{cityInfo.properties}   properties</h5>
            //     </div>
            //     <div className="banner-extra">
            //         <div className="avg-price">Average price UAH{cityInfo.avgPrice}</div>
            //     </div>
            // </Container>

            <Container onClick={onCardClick} className="banner" style={imgStyles(cityInfo.pictureUrl)}>
                <Card.Content>
                    <Card.Header className="title">
                        {cityInfo.city}
                        <img src={cityInfo.flagUrl} alt="/" style={{ width: 59 }} />
                    </Card.Header>
                    <Card.Meta>
                        <h5 className="subtitle">{Intl.NumberFormat('en-US').format(cityInfo.properties)}   properties</h5>
                    </Card.Meta>
                    <Card.Description className="avg-price" style={{ background: birka }}>
                        <span className="avg-price_text">
                            Average price
                        </span>
                        <span className="avg-price_count">
                            UAH  {Intl.NumberFormat('en-US').format(cityInfo.avgPrice)}
                        </span>

                    </Card.Description>
                </Card.Content>

            </Container >

        );
    }
}


export default class BannerListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onCardClick = (cityId) => {
        // awsome logic ...
        console.log(cityId);
    }

    render() {
        const { cityInfos } = this.props;
        const [
            city1, city2,
            city3, city4, city5
        ] = cityInfos;



        return (
            // <Grid celled>
            //     <Grid.Column width={8} style={imgStyles(city1.pictureUrl)}>
            //         <BannerComponent cityInfo={city1} onClick={() => this.onCardClick(city1.id)} />
            //     </Grid.Column>
            //     <Grid.Column width={8} style={imgStyles(city2.pictureUrl)}>
            //         <BannerComponent cityInfo={city2} onClick={() => this.onCardClick(city2.id)} />
            //     </Grid.Column>

            //     < Grid.Column width={5} style={imgStyles(city3.pictureUrl)}>
            //         <BannerComponent cityInfo={city3} onClick={() => this.onCardClick(city3.id)} />
            //     </Grid.Column>
            //     <Grid.Column width={6} style={imgStyles(city4.pictureUrl)}>
            //         <BannerComponent cityInfo={city4} onClick={() => this.onCardClick(city4.id)} />
            //     </Grid.Column>
            //     <Grid.Column width={5} style={imgStyles(city5.pictureUrl)}>
            //         <BannerComponent cityInfo={city5} onClick={() => this.onCardClick(city5.id)} />
            //     </Grid.Column>
            // </Grid>

            <Grid >
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <BannerComponent cityInfo={city1} onClick={() => this.onCardClick(city1.id)} />
                    </Grid.Column>
                    <Grid.Column >
                        <BannerComponent cityInfo={city2} onClick={() => this.onCardClick(city2.id)} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column >
                        <BannerComponent cityInfo={city3} onClick={() => this.onCardClick(city3.id)} />
                    </Grid.Column>
                    <Grid.Column >
                        <BannerComponent cityInfo={city4} onClick={() => this.onCardClick(city4.id)} />
                    </Grid.Column>
                    <Grid.Column >
                        <BannerComponent cityInfo={city5} onClick={() => this.onCardClick(city5.id)} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );

    }
}
