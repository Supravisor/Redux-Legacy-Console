
let case = "";
let constant = "";
let count = 0;

function switchCase() {
  count++;  
  case += "\n\nconst case" + count + " = () => {\n  return {\n    type: " + document.editor.caseValue.value.replace(' ', '').toUpperCase() + ";\n  }\n};";
  constant += "\nconst " + document.editor.caseValue.value.replace(' ', '').toUpperCase() + " = \"" + document.editor.caseValue.value.replace(' ', '').toUpperCase() + "\";";
}

function printCases() {
  document.editor.textbox.value += case;
  case = "";
  count = 0;
}

function printConstant() {
  document.editor.textbox.value += constant;
  constant = "";
}
