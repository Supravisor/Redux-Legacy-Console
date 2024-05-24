
let cases = "";
let constant = "";
let count = 0;

function switchCase() {
  count++;  
  cases += "\n\nconst case" + count + " = () => {\n  return {\n    type: " + document.editor.caseValue.value.replace(' ', '').toUpperCase() + ";\n  }\n};";
  constant += "\nconst " + document.editor.caseValue.value.replace(' ', '').toUpperCase() + " = \"" + document.editor.caseValue.value.replace(' ', '').toUpperCase() + "\";";
}

function printCases() {
  document.editor.textbox.value += cases;
  cases = "";
  count = 0;
}

function printConstant() {
  document.editor.textbox.value += constant;
  constant = "";
}
