import css from '../Friendsitem/';
import PropTypes from 'prop-types';
const Frienditem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default Frienditem;
Frienditem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
