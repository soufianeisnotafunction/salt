import React, {Component} from 'react';
import logo from './logo.svg';
import Row from "./row/Row.jsx";
import Container from "./container/Container.jsx";
import Col from "./col/Col.jsx";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Container>
                <Row>
                    <Col desk={4} tab={12} mob={12}>
                        Bonjour
                    </Col>
                    <Col desk={4} tab={12} mob={12}>
                        Bonjour
                    </Col>
                    <Col desk={4} tab={12} mob={12}>
                        Bonjour
                    </Col>
                </Row>
              </Container>
            </div>
        );
    }
}

export default App;
