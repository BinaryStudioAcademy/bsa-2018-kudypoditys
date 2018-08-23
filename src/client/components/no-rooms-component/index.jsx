import React from 'react';
import './index.scss';
import DefaultContainer from './defaultContainer.jsx';
import AddRoom from './addRoomForm.jsx';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';

class PricesTab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayAddForm: false
        }
    }
    AddRoom(){
        this.setState({displayAddForm:true});
    }
    handleSubmit(data){
        // todo this.props.submitTab(data)
    }
    render() {

        return(
            <div className='no-room-box'>
            {this.state.displayAddForm === false?
               <DefaultContainer AddRoom = {this.AddRoom.bind(this)}/>
            :
                <AddRoom handleSubmit={this.handleSubmit}/>
            }
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PricesTab)

