
let casesSwitch = "\nconst reducer = (state = defaultState, " + document.editor.reducerAction.value + ") => {\n\n  switch (action.type) {";
let cases = "";
let constant = "";
let count = 0;

function switchCase() {
  count++;
  document.editor.textbox.value+="\n    case ' + document.editor.caseAction.value.replace(' ', '').toUpperCase() + ':\n      return {\n        ' + document.editor.defaultStateKey.value + ': ' + document.editor.caseValue.value + '\n      };";
  cases += "\n\nconst case" + count + " = () => {\n  return {\n    type: " + document.editor.caseAction.value.replace(' ', '').toUpperCase() + ";\n  }\n};";
  constant += "\nconst " + document.editor.caseAction.value.replace(' ', '').toUpperCase() + " = \"" + document.editor.caseAction.value.replace(' ', '').toUpperCase() + "\";";
}

function default() {
  document.editor.textbox.value += cases;
  cases = "";
  count = 0;
  document.editor.textbox.value += "\n    default:\n    return defaultState;        \n  }\n}";
}

function printConstant() {
  document.editor.textbox.value += constant;
  constant = "";
}
