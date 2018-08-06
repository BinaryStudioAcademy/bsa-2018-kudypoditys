import React from 'react';
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
                <Quickfilter />
            </div>
        );
    }

    componentDidMount() {
        getHitCount().then(hitCount => this.setState({ hitCount }));
    }
}

export default App;