import React from 'react';

const youtubeTag = [
  {name: "ghibli"},
  {name: "totoro"},
  {name: "spirited away"},
  {name: "Howl's Moving Castle"},
  {name: "Ponyo"},
  {name: "Princess Mononoke"}
]

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag gmarket5">
      <div>
        {youtubeTag.map((tag, index) => 
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default YoutubeTag;
