import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import DefaultContainer from './defaultContainer.jsx';
import AddRoom from './addRoomForm.jsx'

class NoRoom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayAddForm: true
        }
    }
    AddRoom(){
        this.setState({displayAddForm:true});
    }
    render() {

        return(
            <div className='no-room-box'>
            {this.state.displayAddForm === false?
               <DefaultContainer AddRoom = {this.AddRoom.bind(this)}/>
            :
            <AddRoom />
            }
            </div>
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
export default NoRoom;

