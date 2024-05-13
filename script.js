import ReactDOM from "https://esm.sh/react-dom";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "" };

  }
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    {
      let text = "";
      let count = 0;
      let caseProperty = document.editor.caseProperty.value;

      function switchCase() {
  count++;  
  text += "\n\nconst case" + count + " = () => {\n  return {\n    type: \"" + document.editor.caseProperty.value + "\";\n  }\n};";
}
    }
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
