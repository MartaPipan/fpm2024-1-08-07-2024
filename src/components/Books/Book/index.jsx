import PropTypes from 'prop-types';

const Book = ({ title = '', author = '', yearCreate = '', pages = 0 }) => {
    return (
        <article>
            <h4>{title}</h4>
            <h4>{author}</h4>
            <h4>{yearCreate}, pages: {pages}</h4>
        </article>
    );
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    yearCreate: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    pages: PropTypes.number.isRequired
};

export default Book;



/**
 * Функція `PropTypes.shape` використовується для визначення типу та структури властивості об’єкта. **`PropTypes.shape`**: це дозволяє вам визначити форму об’єкта, вказавши типи його властивостей. Давайте включимо `PropTypes.shape` і `isRequired` у ваш приклад. Припустімо, ми хочемо, щоб проп `author` був об’єктом із певними властивостями:
 * 
 * import PropTypes from 'prop-types'; 
 * 
 * const Book = ({ title = '', author = { name: '', age: 0 }, yearCreate = '', pages = 0 }) => {
 *  return ( <article> 
 * <h4>{title}</h4 > 
 * <h4>{author.name}</h4> 
 * <h4>{yearCreate}, pages: {pages}</h4> 
 * </article> ); }; 
 * 
 * 
 * Book.propTypes = {
 *  title: PropTypes.string.isRequired, 
 * author: PropTypes.shape({ name: PropTypes.string.isRequired, age: PropTypes.number, }).isRequired, 
 * yearCreate: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]), 
 * pages: PropTypes.number, };
 * 
 * 
 */
