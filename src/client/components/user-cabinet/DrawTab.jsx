import React from "react";
import { Header, Tab } from "semantic-ui-react";

export class DrawTab extends React.Component {
    render() {
        const { subheader, component } = this.props;
        return (
            <Tab.Pane>
                {/* <Message info>{header}</Message> */}
                {subheader ? (
                    <Header
                        as="h4"
                        style={{ paddingBottom: 10, lineHeight: 1.2 }}
                    >
                        {subheader}
                    </Header>
                ) : null}
                <div
                // onSubmit={this.props.onSubmit}
                >
                    {component}
                </div>
            </Tab.Pane>
        );
    }
}
