import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Main from "./component/main";
import Data from "./data.json";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      changeHorns: 0,
    };
  }

  setChangeHorns = (val) =>
    this.setState({
      changeHorns: parseInt(val),
    });

  filter = () => {
    const filteringHorns = Data.filter(
      (beast) => beast.horns === this.state.changeHorns
    );
    console.log(filteringHorns);
    this.setState({ data: filteringHorns });
  };

  render() {
    return (
      <div className="app">
        <Header title="Horned Beasts" />
        <Main data={this.state.data} />
        <Footer author="Tray Chea" />
      </div>
    );
  }
}

export default App;
