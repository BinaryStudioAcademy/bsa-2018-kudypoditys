import React from 'react';

export class DummyComponent extends React.Component {

    render(){
        const id = this.props.match.params.id;

        return <h1>
                I am a property page with id={id}
            </h1>
    }
}