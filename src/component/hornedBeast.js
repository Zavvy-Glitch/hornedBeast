import { Component } from 'react'
import heart from '../Red-Heart.png'
import Card from 'react-bootstrap/Card';



class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0

    };
  }
favoritedBeast = () => {
  this.props.handleImageClick (this.props.beast.image_url)
}

updateHearts = () => {
  this.setState({
    favorites: this.state.favorites + 1,
  })
  
}
  render() {
    return (
    <>
    <Card bg='dark' border ='dark' text='light' style={{ width: '20rem', height: '50rem'}}>
      <Card.Title><h1 id='name'>{this.props.beast.title}</h1></Card.Title>
        <Card.Img variant="top" src={this.props.beast.image_url} onClick={this.favoritedBeast} alt={this.props.beast.title} width='25%' height='auto' />
          <Card.Body>
            <Card.Text>
              <h2 id='description'>{this.props.beast.description}</h2>
            </Card.Text>
              <h4 id='horns'>Number of Horns: {this.props.beast.horns}</h4>
              <span id='heart'>
                Click Heart to Favorite:{this.state.favorites}
              <img src={heart} alt='heart' width='15px' height='auto' onClick={this.updateHearts}/>
              </span>
          </Card.Body>
    </Card>
    </>
    );
  }
}



export default HornedBeasts;