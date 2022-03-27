import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const AlertCompo = (props) => {
    return (
        <Container fluid>
            <Alert variant={props.type}>
                <Alert.Heading>{props.head}</Alert.Heading>
            </Alert>
        </Container>

    );
}

export default AlertCompo;
