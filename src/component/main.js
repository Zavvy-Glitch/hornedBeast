import { Component } from "react";
import HornedBeasts from "./hornedBeast";
import { Container, Row, Col } from "react-bootstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="cardsArray">
          <Container>
            <Row md={4} className="g-4">
              {this.props.data.map((currentBeast) => {
                return (
                  <Col>
                    <HornedBeasts
                      className="d-block w-100"
                      beast={currentBeast}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Main;
