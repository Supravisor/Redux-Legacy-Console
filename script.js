
let casesSwitch = "\n\nconst reducer = (state = defaultState, " + document.editor.reducerAction.value + ") => {\n  switch (action.type) {";
let cases = "";
let caseVariable = "";
let constant = "";
let count = 0;

function switchCase() {
  count++;
  document.editor.textbox.value += "\n    case " + document.editor.caseAction.value.replace(' ', '').toUpperCase() + ":\n      return {\n        " + document.editor.defaultStateKey.value + ": " + document.editor.caseValue.value + "\n      };";
  cases += "\n    case " + document.editor.caseAction.value.replace(' ', '').toUpperCase() + ":\n      return {\n        " + document.editor.defaultStateKey.value + ": " + document.editor.caseValue.value + "\n      };";
  caseVariable += "\n\nconst case" + count + " = () => {\n  return {\n    type: " + document.editor.caseAction.value.replace(' ', '').toUpperCase() + ";\n  }\n};";
  constant += "\nconst " + document.editor.caseAction.value.replace(' ', '').toUpperCase() + " = \"" + document.editor.caseAction.value.replace(' ', '').toUpperCase() + "\";";
}

function handleMultipleActions() {
  document.editor.textbox.value = '\nconst defaultState = {\n  ' + document.editor.defaultStateKey.value + ': ' + document.editor.defaultStateValue.value + '\n};\n';
  document.editor.textbox.value += constant;
  constant = "";
  document.editor.textbox.value += casesSwitch;
  document.editor.textbox.value += cases;
  document.editor.textbox.value += "\n    default:\n    return defaultState;\n  }\n};";
  document.editor.textbox.value += "\n\nconst store = Redux.createStore(reducer);";
  document.editor.textbox.value += caseVariable;
  cases = "";
  caseVariable = "";
  count = 0;
}
