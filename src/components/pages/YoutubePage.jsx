import React, { useEffect, useState } from 'react';
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import YoutubeSlider from "../youtube/YoutubeSlider";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";


const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=AIzaSyDtUY2hY4xw1bReiktKubCdhCr9vUum5sg`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=Studio%20Ghiblitype=video&key=AIzaSyDtUY2hY4xw1bReiktKubCdhCr9vUum5sg'
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Contents>
      <ContTitle title="youtube" />
      <YoutubeSlider />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search}/>
      <YoutubeCont youtubes={youtubes} />
    </Contents>
  );
};

export default YoutubePage;
