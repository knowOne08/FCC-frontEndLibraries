// The first is unidirectional data flow. State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need.
// The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. 
// It begins to create a separation where state management is handled in one part of code and UI rendering in another. This principle of separating state logic from UI logic is one of React's key principles.
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar name={this.state.name}/>
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };