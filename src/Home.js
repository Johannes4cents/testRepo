import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = () => {
  const searchResult = useStoreState((state) => state.searchResult);
  return (
    <main className="Home">
      {searchResult.length ? (
        <Feed posts={searchResult} />
      ) : (
        <p className="statusMsg"> No Posts to display</p>
      )}
    </main>
  );
};

export default Home;
