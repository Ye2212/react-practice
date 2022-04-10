import propTypes from 'prop-types'; 

export const Button = ({ toggleVisibility, isVisible }) => {
  return (
    <button type="button" onClick={toggleVisibility}>
      {isVisible ? 'Hide Films' : 'Show Films'}
    </button>
  );
};

Button.propTypes = {
    toggleVisibility: propTypes.func.isRequired,
    isVisible: propTypes.bool.isRequired,
}
