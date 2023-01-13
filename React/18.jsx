// State consists of any data your application needs to know about, that can change over time. 
// You create state in a React component by declaring a state property on the component class in its constructor
// This initializes the component with state when it is created. The state property must be set to a JavaScript object.
// You have access to the state object throughout the life of your component.
class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
        this.state = {
          firstName: "Yash"
  }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  };