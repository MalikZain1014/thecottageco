import React, { useState } from "react";
import FeatureSection from "../Layout/FeatureSection";
import CottageCard from "../Layout/Card";
import { Data } from "../Assets/Data";
import { TData } from "../Assets/Data";
import { AxData } from "../Assets/Data";
import { CrtData } from "../Assets/Data";
import CottageCommunity from "../Layout/CottageCommunity";
import Hero from "../Layout/Hero";
const Home = () => {
  const [item1] = useState(Data);
  const [item2] = useState(CrtData);
  const [item3] = useState(TData);
  const [item4] = useState(AxData);

  return (
    <>
      <Hero />
      <FeatureSection items={item1} Header={"Featured Hoodies"} />
      <CottageCommunity items={item2} />
      <FeatureSection items={item3} Header={"Trending Tees"} />
      <CottageCard />
      <FeatureSection items={item4} Header={"Trending Accessories"} />
    </>
  );
};

export default Home;
