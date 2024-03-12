import ReactDOM from "https://esm.sh/react-dom";

let marked = "marked";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "" };

    // Change code below this line

    // Change code above this line
  }

  // Change code below this line
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  // Change code above this line
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "container" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor",
        value: this.state.markdown,
        onChange: e => {this.updateMarkdown(e.target.value);
        } },

      console.log(this.state.markdown)), /*#__PURE__*/

      React.createElement("div", { id: "preview", class: "container", dangerouslySetInnerHTML: { __html: this.state.markdown } }), /*#__PURE__*/

      React.createElement(Output, null)));


  }}


const Output = (props) => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/

React.createElement("div", null, props.output));





ReactDOM.render( /*#__PURE__*/React.createElement(Input, null), document.getElementById("markdown"));
