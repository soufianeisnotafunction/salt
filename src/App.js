import React, {Component} from 'react';
import Row from "./row/Row.jsx";
import Container from "./container/Container.jsx";
import Col from "./col/Col.jsx";
import Button from './button/Button.jsx'


class App extends Component {
    render() {
        return (
            <div className="App">
              <Container>
                <Row>
                    <Col desk={4} tab={12} mob={12}>
                        <Button>MICHOU</Button>
                    </Col>
                    <Col desk={4} tab={12} mob={12}>
                      <Button>MICHOU</Button>
                    </Col>
                    <Col desk={4} tab={12} mob={12}>
                        <Button>MICHOU</Button>
                    </Col>
                </Row>
              </Container>
            </div>
        );
    }
}

export default App;
