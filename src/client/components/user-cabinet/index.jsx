import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { DrawTab } from "./DrawTab";
import { MenuItems } from "./config";
import { Container, Tab } from "semantic-ui-react";
import Header from "../header";
import "./index.scss";

export class UserCabinet extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        };
    }

    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

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
        const { activeIndex } = this.state;
        return (
            <React.Fragment>
                <Header />
                <Container style={{ marginTop: "25px" }}>
                    <Tab
                        menu={{
                            fluid: true,
                            secondary: true,
                            pointing: true
                        }}
                        panes={this.getPanes()}
                        activeIndex={activeIndex}
                        onTabChange={this.handleTabChange}
                    />
                </Container>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCabinet);
