import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import './index.scss';

class Breadcrumbs extends React.Component {
    static defaultProps = {
        sections : [
            { key: 'Home', content: 'Home', href:'#' },
            { key: 'Ukraine', content: 'Ukraine', href:'#'},
            { key: 'Lviv', content: 'Lviv', href:'#'},
            { key: 'Awesome Apart', content: 'Awesome Apart', active: true},
          ]
    };
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Breadcrumb icon='right angle' sections={this.props.sections} />
        )
    }
}

export default Breadcrumbs;