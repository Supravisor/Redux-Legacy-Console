
let casesSwitch = "\nconst reducer = (state = defaultState, " + document.editor.reducerAction.value + ") => {\n\n  switch (action.type) {";
let cases = "";
let constant = "";
let count = 0;

function switchCase() {
  count++;
  document.editor.textbox.value+='\n    case ' + document.editor.caseValue.value.replace(' ', '').toUpperCase() + ':\n      return {\n        ' + document.editor.caseKey.value + ': ' + document.editor.caseProperty.value + '\n      };';
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
