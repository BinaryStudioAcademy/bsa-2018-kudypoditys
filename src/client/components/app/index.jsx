import React from 'react';
import Breadcrumbs from 'client/components/breadcrumbs';
import { getHitCount } from 'client/services/hitCountService';
import Quickfilter from 'client/components/quick-filter';

class App extends React.Component {

    state = {
        hitCount: undefined
    };

    render() {
        const { hitCount } = this.state;

        if (hitCount === undefined) {
            return null;
        }

        return (
            <div>
                <Breadcrumbs />
                <Quickfilter />
            </div>
        );
    }

    componentDidMount() {
        getHitCount().then(hitCount => this.setState({ hitCount }));
    }
}

export default App;