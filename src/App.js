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

              <Jumbotron height='450px' image='https://static.pexels.com/photos/320007/pexels-photo-320007.jpeg' title='Discover a whole new world !' subtitle={<Button>MichouJS</Button>} navbar={<Navbar/>}/>

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
