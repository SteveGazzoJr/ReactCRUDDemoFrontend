import "./App.css";
import React from "react";
import ClientRow from "./ClientRow";

class App extends React.Component {
  state = {
    clients: [],
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/clients");
    const body = await response.json();
    this.setState({ clients: body });
  }
  render() {
    const { clients } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Clients</h2>
          <div className="App-intro">
            {clients.map((client) => (
              <ClientRow
                client={{
                  name: client.name,
                  email: client.email,
                  id: client.id,
                }}
              />
            ))}
          </div>
        </header>
      </div>
    );
  }
}
export default App;
