import React from "react";

const Portfolio = () => {
  return (
    <section id="portSection" class="port__wrap section center bg-blue">
      <h3>포트폴리오 소개</h3>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 포트폴리오 입니다.</p>
      <div class="port__inner container">
        <div class="port__btn">
          <ul>
            <li>
              <a href="/">21기</a>
            </li>
            <li>
              <a href="/">22기</a>
            </li>
            <li>
              <a href="/">23기</a>
            </li>
            <li>
              <a href="/">24기</a>
            </li>
          </ul>
        </div>
        <div class="port__cont">
          <div class="port">
            <figure class="port__header">
              <img src="./assets/images/portfolio/port01.jpg" alt="포폴1" />
            </figure>
            <div class="port__body">
              <div class="pic">
                <img src="./assets/images/member/member01.svg" alt="멤버1" />
              </div>
              <div>
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div class="port">
            <figure class="port__header">
              <img src="./assets/images/portfolio/port02.jpg" alt="포폴1" />
            </figure>
            <div class="port__body">
              <div class="pic">
                <img src="./assets/images/member/member02.svg" alt="멤버1" />
              </div>
              <div>
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div class="port">
            <figure class="port__header">
              <img src="./assets/images/portfolio/port03.jpg" alt="포폴1" />
            </figure>
            <div class="port__body">
              <div class="pic">
                <img src="./assets/images/member/member03.svg" alt="멤버1" />
              </div>
              <div>
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div class="port">
            <figure class="port__header">
              <img src="./assets/images/portfolio/port04.jpg" alt="포폴1" />
            </figure>
            <div class="port__body">
              <div class="pic">
                <img src="./assets/images/member/member05.svg" alt="멤버1" />
              </div>
              <div>
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div class="port">
            <figure class="port__header">
              <img src="./assets/images/portfolio/port05.jpg" alt="포폴1" />
            </figure>
            <div class="port__body">
              <div class="pic">
                <img src="./assets/images/member/member09.svg" alt="멤버1" />
              </div>
              <div>
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div class="port">
            <figure class="port__header">
              <img src="./assets/images/portfolio/port06.jpg" alt="포폴1" />
            </figure>
            <div class="port__body">
              <div class="pic">
                <img src="./assets/images/member/member11.svg" alt="멤버1" />
              </div>
              <div>
                <h4>김현정 포트폴리오</h4>
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
