import Profile from './User/Profile';
import user from '../DataJson/user.json';
import StatsList from '../components/Statistics/StatisticsList';
import stats from '../DataJson/data.json';
import FriendtList from './Friends/Friendlist';
import friends from '../DataJson/friends.json';
import transactions from '../DataJson/transactions.json';
import TransactionList from './Transaction/Transaction';
const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatsList title={'Upload stats'} stats={stats} />
      <FriendtList friends={friends} />
      <TransactionList items={transactions} />
    </>
  );
};
export default App;
