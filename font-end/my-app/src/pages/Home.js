import React from "react";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Slider } from "../components/Slider";
import { Announcement } from "./../components/Announcement";
import { Products } from "./../components/Products";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
