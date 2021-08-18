import { Component } from 'react'
import HornedBeasts from './hornedBeast';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap'



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
      image:'',
     
      
    };
  }

handleImageClick = (beastClick) => {
  this.setState({
    test: true,
    image: beastClick
  });
}

handleImageClose = () => {
  this.setState({
    test:false
  })
}

render() {
    return <>
    <div id = 'cardsArray'>
      <Container>
        <Row md={4} className="g-4">
          {this.props.data.map(currentBeast => {
            return (
              <Col>
                <HornedBeasts handleImageClick={this.handleImageClick} className="d-block w-100" beast={currentBeast}/>
              </Col>
            ); 
        })}
        </Row>
      </Container>
    </div>
  
    <Modal show = {this.state.test} onHide = {this.handleImageClose}>
       <Modal.Header>
         <Button onClick = {this.handleImageClose}>X</Button>
       </Modal.Header>
       <Modal.Body>
          <img src={this.state.image} alt=''></img>
       </Modal.Body>
       <Modal.Footer>
       </Modal.Footer>
    </Modal>
    </>
  }
}

export default Main;