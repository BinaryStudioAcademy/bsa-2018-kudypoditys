import React from 'react';
import './index.scss';
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
export default NoRoom;

