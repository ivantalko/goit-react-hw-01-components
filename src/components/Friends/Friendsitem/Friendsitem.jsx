import css from '../Friendsitem/friend.module.css';
import PropTypes from 'prop-types';
const Frienditem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.status_online}></span>
      ) : (
        <span className={css.status_offline}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default Frienditem;
Frienditem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
