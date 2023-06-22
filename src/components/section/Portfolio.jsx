import React from "react";

const Portfolio = (prop) => {
  return (
    <section id="portSection" className={prop.attr}>
      <h3>대표작품 소개</h3>
      <p>지브리 스튜디오의 대표작품</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li>
              <a href="/">1990's</a>
            </li>
            <li>
              <a href="/">2000's</a>
            </li>
            <li>
              <a href="/">2010's</a>
            </li>
            <li>
              <a href="/">2020's</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/portfolio/port01.jpg" alt="포폴1" />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img src="./assets/images/member/member01.svg" alt="멤버1" />
              </div>
              <div>
                <h4>센과 치히로</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/portfolio/port02.jpg" alt="포폴1" />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img src="./assets/images/member/member02.svg" alt="멤버1" />
              </div>
              <div>
                <h4>하울의 움직이는성</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/portfolio/port03.jpg" alt="포폴1" />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img src="./assets/images/member/member03.svg" alt="멤버1" />
              </div>
              <div>
                <h4>원령공주</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/portfolio/port04.jpg" alt="포폴1" />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img src="./assets/images/member/member05.svg" alt="멤버1" />
              </div>
              <div>
                <h4>벼랑위의 포뇨</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/portfolio/port05.jpg" alt="포폴1" />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img src="./assets/images/member/member09.svg" alt="멤버1" />
              </div>
              <div>
                <h4>바람이 분다</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/portfolio/port06.jpg" alt="포폴1" />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img src="./assets/images/member/member11.svg" alt="멤버1" />
              </div>
              <div>
                <h4>마루 밑 아리에티</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
