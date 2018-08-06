import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import './index.scss';

class Breadcrumbs extends React.Component {
    render() {
        return (
            <Breadcrumb icon='right angle' sections={this.props.sections} />
        )
    }
}

export default Breadcrumbs;