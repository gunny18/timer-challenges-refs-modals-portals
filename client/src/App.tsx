import Header from "./components/Header";
import UserWelcome from "./components/UserWelcome";
import Challenges from "./components/Challenges";

const App = () => {
  return (
    <section className="app">
      <Header />
      <UserWelcome />
      <Challenges/>
    </section>
  );
};

export default App;
