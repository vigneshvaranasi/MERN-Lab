import React, { Component } from "react";

const StatelessComponent = () => {
  return <h1>Hello, World! - Stateless</h1>;
};

class StatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.data,
    };
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

function App() {
  return (
    <div>
      <StatelessComponent />
      <StatefulComponent 
        data="Hello, World! - Stateful"
      />
    </div>
  );
}

export default App;
