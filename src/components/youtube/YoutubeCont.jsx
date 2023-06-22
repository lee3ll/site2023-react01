import React from 'react';

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
      <img
        src={youtube.snippet.thumbnails.medium.url}
        alt={youtube.snippet.thumbnails.medium.url}
      />
      <span>{youtube.snippet.title}</span>
      </a>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <main id="main" role="main">
      <section id="youtubePage" className="container">
        <div className="youtube__page">
          <div className="youtube__cont">
            <ul>
              {youtubes.map((youtube, index) => (
                <YoutubeItem key={index} youtube={youtube} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YoutubeCont;
