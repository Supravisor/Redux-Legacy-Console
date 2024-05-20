
let text = "";
let count = 0;
let caseProperty = document.editor.caseProperty.value;

function switchCase() {
  count++;  
  text += "\n\nconst case" + count + " = () => {\n  return {\n    type: " + document.editor.caseValue.value.replace(' ', '').toUpperCase() + ";\n  }\n};";
}

function printCases() {
  document.editor.textbox.value += text;
  text = "";
  count = 0;
}
