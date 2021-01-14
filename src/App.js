import Header from "./containers/Header/Header";
import Layout from "./components/Layout/Layout";
import Products from "./containers/Products/Products";
import Footer from "./components/Footer/Footer";
import Auth from "./containers/Auth/Auth";
import "./app.scss";

const App = () => {
  return (
    <div className="app container">
      <Header />
      <Layout>
        <Auth />
        <Products />
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
