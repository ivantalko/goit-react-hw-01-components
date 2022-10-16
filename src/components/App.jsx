import Profile from "./Profile";
import user from "./user.json";

const App = () => {
  return (
     <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      quantity={user.stats.quantity}/>
    )
};
export default App

