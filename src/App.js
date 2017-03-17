import React, {Component} from 'react';
import Row from "./row/Row.jsx";
import Container from "./container/Container.jsx";
import Jumbotron from "./jumbotron/Jumbotron";
import Col from "./col/Col.jsx";
import Button from './button/Button.jsx'


class App extends Component {
    render() {
        return (
            <div className="App">

              <Jumbotron image='https://static.pexels.com/photos/110147/pexels-photo-110147.jpeg' height='400px' title='Hello world'>

              </Jumbotron>

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
