import React from "react";
import Footer from "../components/Footer";
import Items from "../components/Items";
import NavBar from "../components/NavBar";
import Header  from "../components/Header";

const Home = () => {
  return (
    <div className="bg-project">
        <Header title="MyCommune"/>
        <NavBar />
        <Items />
        <Footer />
    </div>
  );
}

export default Home