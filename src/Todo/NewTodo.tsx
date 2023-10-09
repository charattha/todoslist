// FormEvent for using onSubmit
// MouseEvent for onClick
import { useRef, useState } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (
  props: any
) => {
  const [inputText, setInputText] = useState("");

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);

    setInputText("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">
          If you always forget something, This web will helpful! text
        </label>
        <input
          type="text"
          id="text"
          value={inputText}
          ref={todoTextInputRef}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
