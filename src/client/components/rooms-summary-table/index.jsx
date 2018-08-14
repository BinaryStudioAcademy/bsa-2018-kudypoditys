import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import { Table, Button } from 'semantic-ui-react'
import ModalWindow from './modal.jsx';

class RoomsSummaryTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            modalOpen:false,
            modalInfo:'',
            modalTitle:''

        }
    }
    handleItemClick(info, title){
        this.setState({
            modalInfo : info,
            modalOpen : true,
            modalTitle : title
        })
    }
    onModalClose(){
        this.setState({modalOpen:false})

    }

    showPrice(id){
        this.props.showRoomPrice(id)
    }

    render() {
        const rooms = this.props.rooms.map((room)=>
        <Table.Row key={room.id}>
            <Table.Cell className='room-sleeps'>
                {room.sleeps}
            </Table.Cell>
            <Table.Cell className='room-info'>
                <h4><a className='room-title' onClick={()=>this.handleItemClick(room.info, room.type)}>{room.type}</a></h4>
                <p>{room.beds}</p>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={()=>this.showPrice(room.id)}>Show prices</Button>
            </Table.Cell>
        </Table.Row>
    );

        return(
            <div className='rooms-summary-table'>
                <Table basic='very' celled collapsing>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Sleeps</Table.HeaderCell>
                    <Table.HeaderCell>Room Type</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    {rooms}
                </Table.Body>
            </Table>
            <ModalWindow
                modalOpen={this.state.modalOpen}
                onClose={this.onModalClose.bind(this)}
                header={this.state.modalTitle}
                info={this.state.modalInfo}
            />
          </div>
        )
    }
}
    RoomsSummaryTable.propTypes = {
        boxes: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                type: PropTypes.string,
                bedsAmount: PropTypes.number,
                sleeps:PropTypes.number,
                beds: PropTypes.string,
                info: PropTypes.string
            })
        ),
        OnQuickFilterChange: PropTypes.func
    }
export default connect(mapStateToProps, mapDispatchToProps)(RoomsSummaryTable);