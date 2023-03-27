import Proptypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
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
};
