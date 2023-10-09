import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodos: () => void;
}> = (props) => {
  return (
    <li className={classes.item}>
      <span>{props.text}</span>
      <button onClick={props.onRemoveTodos}>Remove</button>
    </li>
  );
};

export default TodoItem;
