// You apply inline styles to JSX elements similar to how you do it in HTML, but with a few JSX differences.
// <div style="color: yellow; font-size: 16px">Mellow Yellow</div> Example 
// you can also set it equal to a JavaScript object
// <div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div> Example
class Colorful extends React.Component {
    render() {
      return (
        <div style = {{color:"red", fontSize: "72px"}}>Big Red</div>
      );
    }
  };