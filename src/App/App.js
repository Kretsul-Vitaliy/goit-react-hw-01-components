import styles from "./app.module.css";
import SocialProfile from "../components/SocialProfile/SocialProfile";
import user from "../data/user.json";
import data from "../data/data.json";
import Statistics from "../components/Statistics/Statistics";
import FriendList from "../components/FriendList/FriendList";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className={styles.App}>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
