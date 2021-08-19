import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import heart from "../Red-Heart.png";

class SelectedBeast extends Component {
  render() {
    return (
      <div className="modal">
        <Modal show={this.props.test} onHide={this.handleImageClick}>
          <Modal.Header>
            <h1>{this.props.title}</h1>
            <Button onClick={this.props.handleImageClick}>X</Button>
          </Modal.Header>
          <Modal.Body>
            <Card
             bg="dark"
             border="dark"
             text="light"
             >
              <img src={this.props.image} alt=""></img>
              <span>
                <p>Number of Horns: {this.props.numberOfHorns}</p>
                Times Favorited: {this.props.favorites}
                <img
                  src={heart}
                  alt="heartImage"
                  width="20px"
                  height="auto"
                  onclick={this.updateHearts}
                />
              </span>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <h3>{this.props.description}</h3>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default SelectedBeast;
