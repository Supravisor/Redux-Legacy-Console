
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
<link rel="stylesheet" href="styles.css" />

<style>
  h1 > a {
  font-family: Corbel;
  color: white;
  }

</style>

<form name="editor">
  <table>
    <tbody>
      <tr>
        <td id="buttons">
<p>initial value: <input value="0" name="reducer" size="10" type="textfield">
  <input type="button" class="button btn btn-primary" value="create a reducer function" onclick="document.editor.textbox.value+='\nconst reducer = (state = ' + document.editor.reducer.value +') => {\n  return state;\n}\n\n'"></p>
<p><input type="button" class="button btn btn-primary" value="define store" onclick="document.editor.textbox.value+='const store = Redux.createStore(reducer);\n'">
   <input type="button" class="button btn btn-primary" value="define store and create a reducer function" onclick="document.editor.textbox.value+='const store = Redux.createStore(\n  (state = ' + document.editor.reducer.value +') => state\n);\n\n'"></p>

<p><input type="button" class="button btn btn-primary" value="get state from Redux store" onclick="document.editor.textbox.value+='const currentState = store.getState();\n'"></p>

<p><input type="button" class="button btn btn-primary" value="define a Redux action" onclick="document.editor.textbox.value+='\nconst action = {\n  type: &#34;LOGIN&#34;\n}\n'"></p>

<p><input type="button" class="button btn btn-primary" value="define an action creator" onclick="document.editor.textbox.value+='\nfunction actionCreator() {\n  return action;\n}\n'">
</p>
        </td>
        <td id="textbox">
          <textarea id="preview" name="textbox"></textarea>
        </td>
      </tr>
    </tbody>
  </table>
</form>
