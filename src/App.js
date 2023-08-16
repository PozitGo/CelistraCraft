import Footer from "./Components/Footer/Footer";
import Header from "./Components/HeaderComponent/Header";
import Main from "./Components/MainComponent/Main";
import React from "react";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
