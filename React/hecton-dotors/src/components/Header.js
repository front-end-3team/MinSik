import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div class="menu_var">
          <div class="main_logo">
            <a href="./main.html">
              <img
                class="header_logo"
                src="https://hectonproject.com/icon/logo.svg"
              />
            </a>
          </div>

          <div class="menu">
            <ul>
              <li class="menu_story">
                <a class="story_menu" href="./story.html">
                  STORY
                </a>
                <div class="hide-menu">
                  <ul class="speech-bubble">
                    <li>
                      <a href="./story.html#story_culture">헥톤컬쳐</a>
                    </li>
                    <li>
                      <a href="./story.html#story_history">헥톤역사</a>
                    </li>
                    <li>
                      <a href="./story.html#story_ci">헥톤CI</a>
                    </li>
                    <li>
                      <a href="./story.html#story_agency">헥톤대리점</a>
                    </li>
                    <li>
                      <a href="./story.html#story_family">헥톤가족</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="menu_project">
                <div class="menu_border">
                  <a href="./doctors.html">PROJECT</a>
                </div>

                <div class="hide-menu">
                  <ul class="speech-bubble">
                    <li>
                      <a href="./doctors.html">닥터스</a>
                    </li>
                    <li>
                      <a href="./another.html">또하나의가족</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu_culture">
                <div class="menu_border">
                  <a href="./culture.html">CULTURE</a>
                </div>
                <div class="hide-menu">
                  <ul class="speech-bubble">
                    <li>
                      <a href="./culture.html#culture_promise">헥톤인의 다짐</a>
                    </li>
                    <li>
                      <a href="./culture.html#culture_benefit">헥톤인의 혜택</a>
                    </li>
                    <li>
                      <a href="./culture.html#qna">채용문의</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu_contact">
                <div class="menu_border">
                  <a href="./contact.html">CONTACT</a>
                </div>
                <div class="hide-menu">
                  <ul class="speech-bubble">
                    <li>
                      <a href="./contact.html#qna_form">제휴/서비스 문의</a>
                    </li>
                    <li>
                      <a href="./contact.html#information">오시는길</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
