import Proptypes from 'prop-types';

const TodoItem = ({ itemProp }) => <li key={itemProp.id}>{itemProp.title}</li>;
export default TodoItem;

TodoItem.propTypes = {
  itemProp: Proptypes.shape({
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    completed: Proptypes.bool.isRequired,
  }).isRequired,
};
