import React from "react";

import {Header, Tab} from "semantic-ui-react";


export class DrawTab extends React.Component {

    render() {
        const {header, subheader, component} = this.props;
        return (
            <Tab.Pane>

                <Header as="h2">
                    {header}
                </Header>
                <Header as="h4" style={{paddingBottom: 10, lineHeight: 1.2}}>

                    {subheader}

                </Header>
                <div onSubmit={this.props.onSubmit}>
                    {component}
                </div>
            </Tab.Pane>
        )
    }
}
