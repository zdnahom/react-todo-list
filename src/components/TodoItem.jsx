import Proptypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
    {itemProp.title}
  </li>
);
export default TodoItem;

TodoItem.propTypes = {
  itemProp: Proptypes.shape({
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    completed: Proptypes.bool.isRequired,
  }).isRequired,
  handleChange: Proptypes.func.isRequired,
  delTodo: Proptypes.func.isRequired,
};
