import logo from "./logo.svg";
import "./App.css";
import React from "react";

class TestComponent extends React.Component {
  state = {
    clients: [],
  };

  async componentDidMount() {
    this.setState({});
  }

  render() {
    const { clients } = this.state;
    return (
      <div className="TestComponent">
        <h1>REFERENCED ANOTHER COMPONENT HECK YEAH! DID I BREAK GIT THOUGH?</h1>
      </div>
    );
  }
}
export default TestComponent;
