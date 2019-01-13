import React from "react";
import { HomePage } from "../../pages/home-page";
import { getHitCount } from "../../services/hitCountService";

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