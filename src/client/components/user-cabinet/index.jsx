import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { DrawTab } from "./DrawTab";
import { MenuItems } from "./config";
import { Container, Tab } from "semantic-ui-react";

export class UserCabinet extends React.Component {
    getPanes() {
        return MenuItems.map(tab => ({
            menuItem: tab.menuItem,

            render: () => (
                <DrawTab
                    header={tab.menuItem.header}
                    subheader={tab.menuItem.subheader}
                    component={tab.menuItem.component}

                    // onSubmit={this.submitHandle}
                />
            )
        }));
    }

    render() {
        return (
            <Container>
                <Tab
                    menu={{ fluid: true, secondary: true, pointing: true }}
                    menuPosition="top"
                    panes={this.getPanes()}
                />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCabinet);
