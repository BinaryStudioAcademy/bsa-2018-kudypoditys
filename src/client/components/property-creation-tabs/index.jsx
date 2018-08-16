import './index.scss';
import React from 'react';
import { Tab, Container, Header} from 'semantic-ui-react';
import {MenuItems} from "./config";




export class PropertyCreationTabs extends React.Component {

    getPanes() {
        return MenuItems.map((tab) => ({

            menuItem: tab.menuItem,

            render: () =>

                <Tab.Pane>
                    {console.log(tab)}
                    <Header as="h2">
                        {tab.menuItem.header}
                    </Header>
                    <Header as="h4" style={{paddingBottom: 10, lineHeight: 1.2}}>

                        {tab.menuItem.subheader}

                    </Header>
                    {tab.menuItem.content}
                </Tab.Pane>
        }))
    }

    render() {


        return (
            <Container>
                <div className="welcome">

                </div>
                <Tab menu={{fluid: true, vertical: true}} menuPosition="left" panes={this.getPanes()}/>
            </Container>
        )
    }
}


