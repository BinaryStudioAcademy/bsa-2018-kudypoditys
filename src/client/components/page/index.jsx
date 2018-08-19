import React, {Component, Fragment} from 'react';
import './index.scss';
import Header from 'client/components/header';


class Page extends Component {

    render() {
        return (<Fragment>
            <Header></Header>
            {this.props.children}
            <footer>
                Maybe till to the end of the academy we will make a footer, but now we have this...
            </footer>
        </Fragment>);
    }
}

export default Page;
