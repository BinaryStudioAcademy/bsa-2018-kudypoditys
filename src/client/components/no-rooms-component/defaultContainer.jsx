import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { Button,Segment, Image } from 'semantic-ui-react'

class DefaultContainer extends React.Component {
    render() {

        return(
        <Segment>
            <Image
                src='https://react.semantic-ui.com/images/wireframe/image.png'
                size='medium'
                centered
            />
            <p className='default-text'>
            Ви ще не додали жодних номерів до свого помешкання.
            Додайте номери з описом ліжок, інформацією про помешкання та цін для гостей.
            <br />
            <Button onClick={()=>this.props.AddRoom()}>Add room +</Button>
            </p>
        </Segment>
        )
    }
}
    // Quickfilter.propTypes = {
    //     boxes: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             id: PropTypes.string,
    //             ischecked: PropTypes.boolean,
    //             label:PropTypes.string,
    //             amount: PropTypes.oneOfType([PropTypes.number],[PropTypes.string]),
    //             type: PropTypes.string
    //         })
    //     ),
    //     OnQuickFilterChange: PropTypes.func
    // }
export default DefaultContainer;

