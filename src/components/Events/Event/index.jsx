import PropTypes from "prop-types";

const Event = ({
  event: {
    title = "",
    description = "",
    date = "",
    time = "",
    location = "",
    category = "",
  },
}) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>Date: {date} time:{time}</h4>
      <h4>Location: {location}</h4>
      <h4>{category}</h4>
    </article>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.isRequired,
  }),
};

export default Event;
