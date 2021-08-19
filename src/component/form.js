import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changingHorns = (e) => {
    e.preventDefault();
    this.props.changeHorns(e.target.value);
  };

  onSubmit = () => {
    this.props.filter();
  };

  render() {
    return (
      <>
        <Form id="beastSelect">
          <Form.Control
            as="select"
            onChange={this.changingHorns}
            style={{ width: "250px" }}
          >
            <option value="none">Select A Number of Horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hundred</option>
          </Form.Control>
          <Button id="button" onClick={this.onSubmit} variant="dark">
            SUBMIT
          </Button>
        </Form>
      </>
    );
  }
}

export default Forms;
