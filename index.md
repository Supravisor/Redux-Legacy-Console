
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
<link rel="stylesheet" href="styles.css" />

<style>h1 {
  font-family: Corbel;
  color: white;
}
</style>

<form name="editor"><table><tr><td><aside id="buttons">
<input class="name" type="button" value="reducer function">
initial value: <input value="0" name="reducer" size="10" type="textfield">
<input type="button" class="button btn btn-primary" value="create" onclick="document.editor.textbox.value+='\nconst reducer = (state = ' + document.editor.reducer.value +') => {\n  return state;\n}\n\n'">

<br /><input class="name" type="button" value="store">
<input type="button" class="button btn btn-danger" value="create" onclick="document.editor.textbox.value+='let store = Redux.createStore(reducer);\n'">



initial value: <input value="0" name="reducer" size="10" type="textfield">
<input type="button" class="button blue" value="create a Redux Store" onclick="document.editor.textbox.value+='\nconst reducer = (state = ' + document.editor.reducer.value +') => {\n  return state;\n}\n\n'">


<br />
<input type="button" class="button blue" value="define store I" onclick="document.editor.textbox.value+='const store = Redux.createStore(reducer);\n'">

<input type="button" class="button blue" value="define store II" onclick="document.editor.textbox.value+='const store = Redux.createStore(\n  (state = ' + document.editor.reducer.value +') => state\n);\n\nconst store = Redux.createStore(reducer);\n\n'">

<br />
<input type="button" class="button blue" value="get state from Redux store" onclick="document.editor.textbox.value+='let currentState = store.getState();\n'">

    </aside>
         </td><td>
    <aside id="textbox">
      <textarea id="preview" name="textbox"></textarea></aside></td><tr></table></form>
