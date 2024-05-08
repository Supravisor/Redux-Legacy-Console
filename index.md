
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
<link rel="stylesheet" href="styles.css" />

<style>

h1 > a {
  font-family: Corbel;
  color: white;
}

.markdown-body h1 {
  border-bottom: none;
}

.markdown-body table td, .markdown-body table tr {
  border: none;
}

</style>

<form name="editor">
  <table>
    <tbody>
      <tr>
        <td id="buttons">

<article><input type="button" class="btn btn-primary" value="create a reducer function" onclick="document.editor.textbox.value+='\nconst ' + document.editor.reducerName.value + ' = (state = ' + document.editor.state.value + ') => {\n  return state;\n}\n\n'" />
Name:  <input value="reducer" name="reducerName" size="10" type="textfield" />
State: <input value="initial" name="state" size="10" type="textfield" /></article>

<p><input type="button" class="button btn btn-primary" value="define store" onclick="document.editor.textbox.value+='const store = Redux.createStore(reducer);\n'" />
   <input type="button" class="btn btn-success" value="define store and create a reducer function" onclick="document.editor.textbox.value+='const store = Redux.createStore(\n  (state = ' + document.editor.reducer.value + ') => state\n);\n\n'" /></p>

<p><input type="button" class="button btn btn-primary" value="get state from Redux store" onclick="document.editor.textbox.value+='const currentState = store.getState();\n'" /></p>

<hr />

<p><input type="button" class="button btn btn-primary" value="define a Redux action I" onclick="document.editor.textbox.value+='\nconst ' + document.editor.action.value + ' = {\n  type: &#34;' + document.editor.actionType.value + '&#34;\n}\n'" />

  <input value="action" name="action" size="10" type="textfield">
  <input value="type" name="actionType" size="10" type="textfield"></p>
  
<p><input type="button" class="button btn btn-primary" value="define an action creator" onclick="document.editor.textbox.value+='\nfunction ' + document.editor.actionCreator.value + '() {\n  return ' + document.editor.action.value + ';\n}\n'" />

  <input value="actionCreator" name="actionCreator" size="10" type="textfield"></p>

<p><input type="button" class="button btn btn-primary" value="define a Redux action II" onclick="document.editor.textbox.value+='\nconst ' + document.editor.actionCreator.value + ' = () => {\n  return {\r    type: &#34;' + document.editor.actionType.value + '&#34;\n  }\n};\n'" /></p>
  
<p><input type="button" class="button btn btn-primary" value="dispatch an action event indirectly" onclick="document.editor.textbox.value+='\nstore.dispatch(' + document.editor.actionCreator.value + '());\n'" /></p>

<p><input type="button" class="button btn btn-success" value="dispatch an action event directly" onclick="document.editor.textbox.value+='\nstore.dispatch({ type: &#34;' + document.editor.actionType.value + '&#34; });\n'" />
</p>

<hr />

<p><input type="button" class="button btn btn-primary" value="defaultState" onclick="document.editor.textbox.value+='\nconst defaultState = {\n' + '  '+ defaultStateKey.value + ': ' + defaultStateValue.value + '\n};\n'">
 <input value="key" name="defaultStateKey" size="10" type="textfield">
 <input value="value" name="defaultStateValue" size="10" type="textfield"></p>

<p><input type="button" class="button btn btn-primary" value="reducer function with argument using if/else statements" onclick="document.editor.textbox.value+='\nconst reducer = (state = defaultState, ' + document.editor.reducerAction.value + ') => {\nif (' + document.editor.reducerAction.value + '.type === &#34;' + document.editor.reducerArgument.value + '&#34;) {\n    return {\n     ' + document.editor.reducerKey.value + ': ' + document.editor.reducerValue.value + '\n    };\n  } else {\n    return state;\n  }\n};\n'"></p>
<p><input value="action" name="reducerAction" size="10" type="textfield">
 <input value="argument" name="reducerArgument" size="10" type="textfield">
 <input value="key" name="reducerKey" size="10" type="textfield">
 <input value="value" name="reducerValue" size="10" type="textfield"></p>

<p><input type="button" class="button btn btn-primary" value="reducer function with argument using switch statement" onclick="document.editor.textbox.value+='\nconst reducer = (state = defaultState, ' + document.editor.reducerAction.value + ') => {\n    switch (action.type) {'"></p>
<p><input type="button" class="button btn btn-primary" value="case" onclick="document.editor.textbox.value+='\n    case &#34;' + document.editor.caseType.value + '&#34;:\n    return {' + document.editor.defaultStateKey.value + ': ' + document.editor.caseProperty.value + '};'">
  <input value="case type" name="caseType" size="10" type="textfield">
  <input value="case property" name="caseProperty" size="10" type="textfield"></p>
<p><input type="button" class="button btn btn-primary" value="default" onclick="document.editor.textbox.value+='\n    default:\n    return defaultState;        \n  }\n};'"></p>

        </td>
        <td id="textbox">
          <textarea id="preview" name="textbox"></textarea>
        </td>
      </tr>
    </tbody>
  </table>
</form>
