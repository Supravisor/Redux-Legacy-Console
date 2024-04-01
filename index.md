
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
<link rel="stylesheet" href="styles.css" />

<style>
  h1 > a {
  font-family: Corbel;
  color: white;
  }
  
  h1 {
  border: none;
  }

  tbody {
  border-color: none;
  }

</style>

<form name="editor">
  <table>
    <tr>
      <td id="buttons">
<p>initial value: <input value="0" name="reducer" size="10" type="textfield">
    <input type="button" class="button btn btn-primary" value="create a Redux Store" onclick="document.editor.textbox.value+='\nconst reducer = (state = ' + document.editor.reducer.value +') => {\n  return state;\n}\n\n'"></p>
    <p><input type="button" class="button btn btn-primary" value="define store" onclick="document.editor.textbox.value+='const store = Redux.createStore(reducer);\n'">
    <input type="button" class="button btn btn-primary" value="define store and create a Redux Store" onclick="document.editor.textbox.value+='const store = Redux.createStore(\n  (state = ' + document.editor.reducer.value +') => state\n);\n\nconst store = Redux.createStore(reducer);\n\n'"></p>

    <p><input type="button" class="button btn btn-primary" value="get state from Redux store" onclick="document.editor.textbox.value+='const currentState = store.getState();\n'"></p>
        
      </td>
      <td id="textbox">
        <textarea id="preview" name="textbox"></textarea>
      </td>
    </tr>
  </table>
</form>
