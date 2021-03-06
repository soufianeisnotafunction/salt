import React, {Component} from 'react';
import Row from "./row/Row.jsx";
import Container from "./container/Container.jsx";
import Jumbotron from "./jumbotron/Jumbotron";
import Col from "./col/Col.jsx";
import Button from './button/Button.jsx';
import Navbar from "./navbar/Navbar";

class App extends Component {
    render() {
        return (
            <div className="App">

              <Jumbotron height='450px' title='Discover a whole new world !' subtitle="C'est trop cool !" navbar={<Navbar/>}/>

              <Container>
                <Row>
                    <Col desk={4} tab={12} mob={12} justify='center'>
                        <Button flat>MICHOU</Button>
                    </Col>
                    <Col desk={4} tab={12} mob={12} justify='center'>
                      <Button flat>MICHOU</Button>
                    </Col>
                    <Col desk={4} tab={12} mob={12} justify='center'>
                        <Button flat>MICHOU</Button>
                    </Col>
                </Row>
              </Container>
            </div>
        );
    }
}

export default App;
