import './index.scss';
import React from 'react';
import {Tab, Container} from 'semantic-ui-react';
import {MenuItems} from "./config";
import {DrawTab} from "./DrawTab";


export class PropertyCreationTabs extends React.Component {

    getPanes() {
        return MenuItems.map((tab) => ({

            menuItem: tab.menuItem,

            render: () =>

                <DrawTab
                    header={tab.menuItem.header}
                    subheader={tab.menuItem.subheader}
                    component={tab.menuItem.component}
                />
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


