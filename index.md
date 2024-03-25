<link rel="stylesheet" href="styles.css" />
  <form name="editor"><table><tr><td>
    <aside id="buttons">
<input class="name" type="button" value="reducer function">
initial value: <input value="0" name="reducer" size="10" type="textfield">
<input type="button" class="button blue" value="create" onclick="document.editor.textbox.value+='\nconst reducer = (state = ' + document.editor.reducer.value +') => {\n  return state;\n}\n\n'">


<br /><input class="name" type="button" value="store">
<input type="button" class="button blue" value="create" onclick="document.editor.textbox.value+='let store = Redux.createStore(reducer);\n'">

    </aside>
         </td><td>
    <aside id="textbox">
      <textarea id="preview" name="textbox"></textarea>
    </aside>
         </td><tr></table></form>




<!--  <script src="script.js" type="module"></script> -->
