
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

<p><input type="button" class="btn btn-primary" value="create a reducer function" onclick="document.editor.textbox.value+='\nconst reducer = (state = ' + document.editor.reducer.value + ') => {\n  return state;\n}\n\n'">
  <input placeholder="initial" name="reducer" size="10" type="textfield"></p>

<p><input type="button" class="button btn btn-primary" value="define store" onclick="document.editor.textbox.value+='const store = Redux.createStore(reducer);\n'" />
   <input type="button" class="btn btn-success" value="define store and create a reducer function" onclick="document.editor.textbox.value+='const store = Redux.createStore(\n  (state = ' + document.editor.reducer.value + ') => state\n);\n\n'" /></p>

<p><input type="button" class="button btn btn-primary" value="get state from Redux store" onclick="document.editor.textbox.value+='const currentState = store.getState();\n'" /></p>

<hr />

<p><input type="button" class="button btn btn-primary" value="define a Redux action" onclick="document.editor.textbox.value+='\nconst ' + document.editor.action.value + ' = {\n  type: &#34;' + document.editor.actionType.value + '&#34;\n}\n'" />

  <input placeholder="action name" name="action" size="10" type="textfield">
  <input placeholder="action type" name="actionType" size="10" type="textfield"></p>
  
<p><input type="button" class="button btn btn-primary" value="define an action creator" onclick="document.editor.textbox.value+='\nfunction ' + document.editor.actionCreator.value + '() {\n  return ' + document.editor.action.value + ';\n}\n'" />

  <input placeholder="actionCreator" name="actionCreator" size="10" type="textfield"></p>
  
<p><input type="button" class="button btn btn-primary" value="dispatch an action event indirectly" onclick="document.editor.textbox.value+='\nstore.dispatch(' + document.editor.actionCreator.value + '());\n'" /></p>

<p><input type="button" class="button btn btn-success" value="dispatch an action event directly" onclick="document.editor.textbox.value+='\nstore.dispatch({ type: &#34;' + document.editor.actionType.value + '&#34; });\n'" />
</p>

<hr />

<p><input type="button" class="button btn btn-primary" value="handle an action" onclick="document.editor.textbox.value+='\nconst loginAction = () => {\n  return {\n    type: \'LOGIN\'\n  }\n};\n\n'">
       <input type="button" class="button blue" value="define a Redux action II" onclick="document.editor.textbox.value+='\nconst ' + document.editor.action.value + ' = () => {\n  return {\r    type: &#34;' + document.editor.actionType.value + '&#34;\n  }\n};\n'" />
  <input placeholder="action name" name="action" size="10" type="textfield">
  <input placeholder="action type" name="actionType" size="10" type="textfield"></p>



<p><input type="button" class="button btn btn-primary" value="defaultState" onclick="document.editor.textbox.value+='\nconst defaultState = {\n' + '  '+ defaultStateKey.value + ': ' + defaultStateValue.value + '\n};\n'">
 <input placeholder="key" name="defaultStateKey" size="10" type="textfield">
 <input placeholder="value" name="defaultStateValue" size="10" type="textfield"></p>

<p><input type="button" class="button btn btn-primary" value="reducer function with argument" onclick="document.editor.textbox.value+='\nconst reducer = (state = defaultState, ' + document.editor.reducerAction.value + ') => {\nif (' + document.editor.reducerAction.value + '.type === &#34;' + document.editor.reducerArgument.value + '&#34;) {\n    return {\n     ' + document.editor.reducerKey.value + ': ' + document.editor.reducerValue.value + '\n    };\n  } else {\n    return state;\n  }\n};\n'">
 <input placeholder="action" name="reducerAction" size="10" type="textfield">
 <input placeholder="argument" name="reducerArgument" size="10" type="textfield">
 <input placeholder="key" name="reducerKey" size="10" type="textfield">
 <input placeholder="value" name="reducerValue" size="10" type="textfield"></p>

        </td>
        <td id="textbox">
          <textarea id="preview" name="textbox"></textarea>
        </td>
      </tr>
    </tbody>
  </table>
</form>
