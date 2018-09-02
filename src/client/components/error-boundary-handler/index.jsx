import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import "./index.scss";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            info: null,
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            error: error,
            info: info.componentStack,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container className="error_boundary_handler-wrapper">
                    <Header>{this.state.error.message}</Header>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.info}
                    </details>
                </Container>
            );
        }
        return this.props.children;
    }
}
