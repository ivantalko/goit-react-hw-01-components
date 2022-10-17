import css from './Friendsitem/friend.module.css';
import Frienditem from './Friendsitem';
const FriendtList = ({ friends }) => {
  return (
    <>
      <ul className={css.friend_list}>
        {friends.map(friends => (
          <Frienditem
            key={friends.id}
            isOnline={friends.isOnline}
            avatar={friends.avatar}
            name={friends.name}
          />
        ))}
      </ul>
    </>
  );
};
export default FriendtList;
