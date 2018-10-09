import React from 'react'
import {Table} from 'semantic-ui-react'
import QuantityPicker from "client/components/quantity-picker";

const RoomsTable = () => (
    <Table celled compact definition>
        <Table.Header fullWidth>
            <Table.Row>
                <Table.HeaderCell width={10} textAlign='center'>Accommodation Type</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='center'>Sleeps</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='center'>Total Price</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='center'>Quantity</Table.HeaderCell>
                <Table.HeaderCell width={3} textAlign='center'>Actions</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>There was an air of elegance once the doors opened to this beautiful and elegant hotel.
                    I had an early flight and it was across the street. They had a board displaying arrivals and
                    departures. However, I would never thought I was at an airport. Vety quite. “There was an air
                    of elegance once the doors opened to this beautiful and elegant hotel. I had an early flight and
                    it was across the street. They had a board displaying arrivals and departures. However,
                    I would never thought I was at an airport. Vety quite. “There was an air of elegance once the doors
                    opened to this beautiful and elegant hotel. I had an early flight and it was across the street.
                    They had a board displaying arrivals and departures. </Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>2000$</Table.Cell>
                <Table.Cell>
                    <QuantityPicker />
                </Table.Cell>
                <Table.Cell onClick={() => alert('asdadad')}>
                    <input type='submit' value='Book now' />
                </Table.Cell>
            </Table.Row>
            <Table.Row textAlign='left'>
                <Table.Cell>There was an air of elegance once the doors opened to this beautiful and elegant hotel.
                    I had an early flight and it was across the street. They had a board displaying arrivals and
                    departures. However, I would never thought I was at an airport. Vety quite. “There was an air
                    of elegance once the doors opened to this beautiful and elegant hotel. I had an early flight and
                    it was across the street. They had a board displaying arrivals and departures. However,
                    I would never thought I was at an airport. Vety quite. “There was an air of elegance once the doors
                    opened to this beautiful and elegant hotel. I had an early flight and it was across the street.
                    They had a board displaying arrivals and departures. </Table.Cell>
                <Table.Cell textAlign='center'>5</Table.Cell>
                <Table.Cell textAlign='center'>1300$</Table.Cell>
                <Table.Cell textAlign='center'>
                    <QuantityPicker />
                </Table.Cell>
                <Table.Cell onClick={() => alert('asdadad')}
                            textAlign='center'>
                    <input type='submit' value='Book now' />
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>There was an air of elegance once the doors opened to this beautiful and elegant hotel.
                    I had an early flight and it was across the street. They had a board displaying arrivals and
                    departures. However, I would never thought I was at an airport. Vety quite. “There was an air
                    of elegance once the doors opened to this beautiful and elegant hotel. I had an early flight and
                    it was across the street. They had a board displaying arrivals and departures. However,
                    I would never thought I was at an airport. Vety quite. “There was an air of elegance once the doors
                    opened to this beautiful and elegant hotel. I had an early flight and it was across the street.
                    They had a board displaying arrivals and departures. </Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>700$</Table.Cell>
                <Table.Cell>
                    <QuantityPicker />
                </Table.Cell>
                <Table.Cell onClick={() => alert('asdadad')}>
                    <input type='submit' value='Book now' />
                </Table.Cell>
            </Table.Row>
        </Table.Body>

        {/*<Table.Footer fullWidth>*/}
            {/*<Table.Row>*/}
                {/*<Table.HeaderCell />*/}
                {/*<Table.HeaderCell colSpan='4'>*/}
                    {/*<Button floated='right' icon labelPosition='left' primary size='small'>*/}
                        {/*<Icon name='user' /> Add User*/}
                    {/*</Button>*/}
                    {/*<Button size='small'>Approve</Button>*/}
                    {/*<Button disabled size='small'>*/}
                        {/*Approve All*/}
                    {/*</Button>*/}
                {/*</Table.HeaderCell>*/}
            {/*</Table.Row>*/}
        {/*</Table.Footer>*/}
    </Table>
);

export default RoomsTable;

// import React from "react";
// import PropTypes from "prop-types";
// import "react-dates/initialize";
//
// import "react-dates/lib/css/_datepicker.css";
// import "./index.scss";
// import PropertyComment from "client/components/property-comment";
// import {Divider} from "semantic-ui-react";
//
// export class PropertyCommentsList extends React.Component {
//     componentDidMount() {
//     }
//
//     render() {
//         const dividerStyle = {
//             color: "#465672",
//             borderTop: "1px solid #46567215",
//             borderBottom: "1px solid #465672"
//         };
//         console.log("Comments List props = ");
//         console.log(this.props);
//
//         if (!this.props) return null;
//         const listItems = this.props.reviews.map((item, index) => {
//             return (
//                 <React.Fragment>
//                     <PropertyComment key={item.id} {...item} />
//                     <Divider style={{...dividerStyle, width: "250px"}}/>
//                 </React.Fragment>
//             )
//         });
//
//         return (
//             <div className='ui comments comments-block'>
//                 <h3 className='ui dividing header'>What guests loved the most</h3>
//                 {listItems}
//             </div>
//         )
//     }
// }
//
// PropertyCommentsList.propTypes = {
//     property: PropTypes.object.isRequired
// };
//
// PropertyCommentsList.defaultProps = {
//     property: null,
// };
//
// export default PropertyCommentsList;
