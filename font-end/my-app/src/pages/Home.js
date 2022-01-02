import React from "react";
import { Categories } from "../components/Categories";
import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";
import { Announcement } from "./../components/Announcement";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
}
