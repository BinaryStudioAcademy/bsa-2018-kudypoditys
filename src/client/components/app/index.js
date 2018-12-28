import React from 'react';
import { HomePage } from 'client/components/home-page';
import { getHitCount } from 'client/services/hitCountService';

class App extends React.Component {

    state = {
        hitCount: undefined
    };

    render() {
        return (<HomePage/>);
    }

    componentDidMount() {
        getHitCount().then(hitCount => this.setState({ hitCount }));
    }
}

export default App;