import Header from "./Header";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <Header list={["Home", "About", "Contact"]} />
      <h1>Hello World</h1>
      <Footer />
    </div>
  );
};

export default App;
