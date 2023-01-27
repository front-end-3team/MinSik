import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div class="footer_wrap">
          <div class="footer_logo">
            <img
              src="https://hectonproject.com/icon/logo.svg"
              width="110px"
            ></img>
          </div>
          <div class="footer_list">
            <ul>
              <li>
                <a href="./story.html">STORY</a>
              </li>
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
            <ul>
              <li>
                <a href="./doctors.html">PROJECT</a>
              </li>
              <li>
                <a href="./doctors.html">닥터스</a>
              </li>
              <li>
                <a href="./another.html">또하나의가족</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="./culture.html">CULTURE</a>
              </li>
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
            <ul>
              <li>
                <a href="./contact.html">CONTACT</a>
              </li>
              <li>
                <a href="./contact.html#qna_form">제휴/서비스 문의</a>
              </li>
              <li>
                <a href="./contact.html#information">오시는 길</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_hecton_info">
          <ul>
            <li>(주)헥톤프로젝트</li>
            <li>07335 서울특별시 영등포구 여의대로</li>
            <li>108, 31층 (여의도동, 파크윈타워2)</li>
            <li>brain@hectonproject.com</li>
            <li>
              <a href="https://hectonproject.com/term">개인정보처리방침</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
