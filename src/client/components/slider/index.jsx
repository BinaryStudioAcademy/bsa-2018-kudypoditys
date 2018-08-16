import SliderSlick from "react-slick";
import React, { Component } from "react";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "./index.scss";

import { Container, Button, Image, Icon } from "semantic-ui-react";

export class Slider extends Component {
    pics = [
        "https://www.hotelimperialeroma.it/data/mobile/hotel-imperiale-roma-camere-01-2.jpg",
        "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-8.jpg",
        "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-10.jpg",
        "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-11.jpg",
        "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-12.jpg"
    ];
    picsThumbnails = pics => {
        return (
            <ul>
                {pics.map((item, i) => (
                    <li key={i}>
                        <button
                            className={
                                i === this.slideIndex
                                    ? "slider-c-button-active"
                                    : ""
                            }
                            onMouseMove={() => this.slider.slickGoTo(i)}
                            onClick={() => this.slider.slickGoTo(i)}
                        >
                            <Image src={item} size="mini" />
                        </button>
                    </li>
                ))}
            </ul>
        );
    };
    settings = {
        dots: this.props.dotsEnable,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        accessibility: false,
        appendDots: () => this.picsThumbnails(this.pics),
        beforeChange: (curr, next) => (this.slideIndex = next)
    };

    render() {
        console.log(this.props.dotsEnable);
        this.slideIndex = this.props.slideIndex || 0;
        return (
            <Container fluid className="slider-c-wrapper">
                <Button
                    className="slider-c-button slider-c-prev-button"
                    onClick={() => this.slider.slickPrev()}
                >
                    <Icon name="arrow alternate circle left" size="large" />
                </Button>
                <SliderSlick
                    ref={slider => (this.slider = slider)}
                    {...this.settings}
                >
                    {this.pics.map((item, i) => (
                        <Image className="slider-c-image" src={item} key={i} />
                    ))}
                </SliderSlick>
                <Button
                    className="slider-c-button slider-c-next-button"
                    onClick={() => this.slider.slickNext()}
                >
                    <Icon name="arrow alternate circle right" size="large" />
                </Button>
            </Container>
        );
    }
}

Slider.propTypes = {
    pics: PropTypes.array,
    slideIndex: PropTypes.number,
    dotsEnable: PropTypes.bool.isRequired
};

export default Slider;
