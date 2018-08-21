import './index.scss';
import React from 'react';
import {Tab, Container} from 'semantic-ui-react';
import {MenuItems} from "./config";
import {DrawTab} from "./DrawTab";
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "./container";

export class PropertyCreationTabs extends React.Component {

    state = {
        activeIndex: 0
    }

    handleRangeChange = e => this.setState({activeIndex: e.target.value});
    handleTabChange = (e, {activeIndex}) => this.setState({activeIndex});

    submitHandle = (...data) => {
        console.log(data);
        this.setState({
            activeIndex: this.state.activeIndex + 1
        })
    }

    getPanes() {
        return MenuItems.map((tab) => ({

            menuItem: tab.menuItem,

            render: () =>

                <DrawTab
                    header={tab.menuItem.header}
                    subheader={tab.menuItem.subheader}
                    component={tab.menuItem.component}
                    changeButton={this.handleTabChange}
                    onSubmit={this.submitHandle}
                />
        }))
    }

    render() {
        const {activeIndex} = this.state;
        console.log(activeIndex);
        console.log(this.props)
        return (
            <Container>
                <div className="welcome">

                </div>
                <Tab menu={{fluid: true, vertical: true}} menuPosition="left" panes={this.getPanes()}
                     activeIndex={activeIndex} onTabChange={this.handleTabChange}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyCreationTabs);


