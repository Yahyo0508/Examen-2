import React from "react";
import Navbar from "../components/Navbar";
import Products from "./Products";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="bg-slate-700 p-6">
        <div className=" container mx-auto max-w-[90%]">
          <Products filterByRating={true} />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
