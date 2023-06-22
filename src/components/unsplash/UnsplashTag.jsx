import React from 'react';

const unsplashTag = [
  {name: "ghibli"},
  {name: "cat"},
  {name: "dog"},
  {name: "bird"},
  {name: "lion"},
  {name: "Castle"}
]

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="unsplash__tag gmarket5">
      <div>
        {unsplashTag.map((tag, index) => 
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default UnsplashTag;