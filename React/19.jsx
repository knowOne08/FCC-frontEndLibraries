// If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.
// Note that if you make a component stateful, no other components are aware of its state
// Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };