import PropTypes from 'prop-types';
import TodoItem from 'components/TodoItem';

const TodosList = ({ todosProps, handleChange }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} />
    ))}
  </ul>
);
export default TodosList;

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
};
