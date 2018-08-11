import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react'

class RoomsSummary extends React.Component {

    static defaultProps={
        rooms: [
            {id:'1', type:'Standart Double room', bedsAmount: 1, bedsType:null, sleeps:2},
            {id:'2', type:'Carska Room', bedsAmount: 1, bedsType:null, sleeps:1},
            {id:'3', type:'Obshchajna Room', bedsAmount: 3, bedsType:null, sleeps:4},
            {id:'4', type:'Polu Obshajna Room', bedsAmount: 1, bedsType:null, sleeps:3}
        ]
    }

    handleItemClick(id){
        console.log(id)
    }
    showPrice(id){
        this.props.findPrice(id)
        console.log(id)
    }


    render() {
        const rooms = this.props.rooms.map((room, key)=>
        <Table.Row key={key}>
            <Table.Cell className='room-sleeps'>
                {room.sleeps}
            </Table.Cell>
            <Table.Cell className='room-info'>
                <h4><a className='room-title' onClick={()=>this.handleItemClick(room.id)}>{room.type}</a></h4>
            </Table.Cell>
            <Table.Cell><Button onClick={()=>this.showPrice(room.id)}>Show prices    </Button></Table.Cell>
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
          </div>
        )
    }
}
    // RoomsSummary.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(RoomsSummary);
