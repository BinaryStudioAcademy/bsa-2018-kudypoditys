import React from "react";
import { Table } from 'semantic-ui-react'

export default class MealsTable extends React.Component {

    render(){
        const {meals} = this.props;
        return  <div>
                    {this.renderTable(meals)}
                </div>
    }

    renderTable = (meals) => (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Meal</Table.HeaderCell>
              <Table.HeaderCell>Meal type</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
      
          <Table.Body>
            { meals.map((mealItem, index) => (            
            <Table.Row key={index}>
              <Table.Cell>{mealItem.meal.name}</Table.Cell>
              <Table.Cell>{mealItem.mealType.name}</Table.Cell>
              <Table.Cell>{mealItem.price ? mealItem.price : "Free"}</Table.Cell>
            </Table.Row>))}
          </Table.Body>
      
        </Table>
      );
}