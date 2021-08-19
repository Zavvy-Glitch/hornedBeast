import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Main from "./component/main";
import Data from "./data.json";
import { Component } from "react";
import Forms from "./component/form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      changeHorns: 0,
    };
  }

  setChangeHorns = (val) => {
    if (val === "none") {
      this.setState({
        changeHorns: val,
      });
    } else {
      this.setState({
        changeHorns: parseInt(val),
      });
    }
  };

  filter = () => {
    if (this.state.changeHorns === "none") {
      this.setState({ data: Data });
    } else {
      const filteringHorns = Data.filter(
        (beast) => beast.horns === this.state.changeHorns
      );
      this.setState({ data: filteringHorns });
    }
  };

  render() {
    return (
      <div className="app">
        <Header title="Horned Beasts" />
        <Forms changeHorns={this.setChangeHorns} filter={this.filter} />
        <Main data={this.state.data} />
        <Footer author="Tray Chea" />
      </div>
    );
  }
}

export default App;
