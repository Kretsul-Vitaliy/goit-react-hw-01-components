import styles from "./app.module.css";
import SocialProfile from "../components/SocialProfile/SocialProfile";
import user from "../data/user.json";
import data from "../data/data.json";
import Statistics from "../components/Statistics/Statistics";

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
      {/* <Statistics stats={data} /> */}
    </div>
  );
}

export default App;
