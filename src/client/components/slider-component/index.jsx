import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'client/components/slider-component/index.scss';

import Slider from 'react-slick';

import { Container, Button, Image, Icon } from 'semantic-ui-react';

export default class SliderComponent extends Component {

    settings = {
        dots: true,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        accessibility: false,
        appendDots: () => this.picsThumbnails(this.props.pics),
        beforeChange: (curr, next) => { 
            this.slideIndex = next;
            return this.props.handleSlideChange(next);
        }
    }

    picsThumbnails = (pics) => {
        return (
            <ul>
                {
                    pics.map((item, i) => (
                        <li>
                            <button
                                className={i === this.slideIndex ? 'slider-c-button-active' : ''}
                                key={i} 
                                onMouseMove={() => this.slider.slickGoTo(i)} 
                                onClick={() => this.slider.slickGoTo(i)}
                            >
                                <Image
                                    src={item} 
                                    size='mini'
                                />
                            </button>
                        </li>
                    ))
                }
            </ul>
        )
    }

    componentDidMount() {
    }
    
    render() {
        this.slideIndex = this.props.slideId || 0;
        return (
            <Container fluid className='slider-c-wrapper'>
                <Button
                    className='slider-c-button slider-c-prev-button'
                    onClick={() => this.slider.slickPrev()}
                    >
                    <Icon name='arrow alternate circle left' size='large'/>
                </Button>
                    <Slider ref={slider => (this.slider = slider)} {...this.settings}>
                        {this.props.pics.map((item, i) =><Image className='slider-c-image' src={item} key={i}/>)}
                    </Slider>
                <Button
                    className='slider-c-button slider-c-next-button'
                    onClick={() => this.slider.slickNext()}
                >
                    <Icon name='arrow alternate circle right' size='large'/>
                </Button>
            </Container>
        )
    }
}

SliderComponent.propTypes = {
    pics: PropTypes.array.isRequired,
    handleSlideChange: PropTypes.func.isRequired,
    slideId: PropTypes.number.isRequired
}