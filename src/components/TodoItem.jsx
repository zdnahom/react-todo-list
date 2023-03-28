import Proptypes from 'prop-types';
import styles from 'styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className={styles.item}>
    <div className={styles.content}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </div>
  </li>
);
export default TodoItem;

TodoItem.propTypes = {
  itemProp: Proptypes.shape({
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    completed: Proptypes.bool.isRequired,
  }).isRequired,
  handleChange: Proptypes.func.isRequired,
  delTodo: Proptypes.func.isRequired,
};
