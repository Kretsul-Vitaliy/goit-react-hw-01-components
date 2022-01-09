import styles from "./app.module.css";
import SocialProfile from "../components/SocialProfile/SocialProfile";
import user from "../data/user.json";

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
    </div>
  );
}

export default App;
