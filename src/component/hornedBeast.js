import { Component } from "react";
import heart from "../Red-Heart.png";
import Card from "react-bootstrap/Card";
import SelectedBeasts from "./selectedBeast";
import Button from "react-bootstrap/Button";

class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      test: false,
    };
  }

  updateHearts = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };

  handleImageClick = () => {
    this.setState({
      test: !this.state.test,
    });
  };

  render() {
    return (
      <>
        <Card
          bg="dark"
          border="dark"
          text="light"
          style={{ width: "20rem", height: "50rem" }}
        >
          <Card.Title>
            <h1 id="name">{this.props.beast.title}</h1>
          </Card.Title>
          <Card.Img
            variant="top"
            src={this.props.beast.image_url}
            alt={this.props.beast.title}
            width="25%"
            height="auto"
          />
          <Card.Body>
            <Card.Text>
              <h3 id="description">{this.props.beast.description}</h3>
            </Card.Text>
            <h4 id="horns">Number of Horns: {this.props.beast.horns}</h4>
            <span id="heart">
              Click Heart to Favorite:{this.state.favorites}
              <img
                src={heart}
                alt="heart"
                width="25px"
                height="auto"
                onClick={this.updateHearts}
              />
            </span>
          </Card.Body>
          <Card.Footer>
            <SelectedBeasts
              title={this.props.beast.title}
              description={this.props.beast.description}
              image={this.props.beast.image_url}
              test={this.state.test}
              handleImageClick={this.handleImageClick}
              numberOfHorns={this.props.beast.horns}
              favorites={this.state.favorites}
              updateHearts={this.updateHearts}
            />
            <Button onClick={this.handleImageClick} variant="secondary" >
              Click Me!
            </Button>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default HornedBeasts;
