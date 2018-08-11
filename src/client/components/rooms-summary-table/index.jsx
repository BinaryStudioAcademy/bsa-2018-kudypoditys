import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react'

class RoomsSummary extends React.Component {

    static defaultProps={

    }

    render() {
        return(
            <div className='rooms-summary-table'>
                <Table basic='very' celled collapsing>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Sleeps</Table.HeaderCell>
                    <Table.HeaderCell>Room Type</Table.HeaderCell>
                    <Table.HeaderCell>price</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Icon disabled name='user' />
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                    <Table.Cell><Button>Click Here</Button></Table.Cell>
                </Table.Row>

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
