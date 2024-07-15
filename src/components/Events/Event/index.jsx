import PropTypes from 'prop-types';

const Event = ({ title = '', description = '', date = '', time = '', location = '', category = '' }) => {
  return (
    <article>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h4>{date}</h4>
      <h4>{time}</h4>
      <h4>{location}</h4>
      <h4>{category}</h4>
    </article>
  );
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.isRequired,
};

export default Event;
