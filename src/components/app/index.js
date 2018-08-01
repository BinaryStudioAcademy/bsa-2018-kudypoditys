import React from 'react';

import { getHitCount } from '../../services/hitCountService';

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
            <h1>
                Hit count: <span style={{ color: 'blue' }}>{hitCount}</span>
            </h1>
        );
    }

    componentDidMount() {
        getHitCount().then(hitCount => this.setState({ hitCount }));
    }
}

export default App;