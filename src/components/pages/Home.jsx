import React from "react";
import Contents from "../layout/Contents";

import Slider from "../section/Slider";
import Intro from "../section/Intro";
// import Member from "../section/Member";
import Portfolio from "../section/Portfolio";
import Youtube from "../section/Youtube";
import Movie from "../section/Movie";
import Unsplash from "../section/Unsplash";

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap gmarket5" />
        <Intro attr="intro__wrap section bg-blue gamrket5" />
        {/* <Member attr="member__wrap section center gmarket5" /> */}
        <Portfolio attr="port__wrap gmarket5 section center" />
        <Youtube attr="youtube__wrap gmarket5 section bg-blue" />
        <Movie attr="movie__wrap gmarket5 section" />
        <Unsplash attr="unsplash__wrap gmarket5 section bg-blue" />
      </Contents>
    </>
  );
};

export default Home;
