import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="/test" class="link link-icon">
            作品集
            <img src="/images/icon/chevron-down.svg" alt="chevron-down" />
          </a>
          <a href="/test" class="link link-icon">
            關於我
            <img src="/images/icon/chevron-down.svg" alt="chevron-down" />
          </a>
          <a href="/test" class="link link-icon">
            工作經驗
            <img src="/images/icon/chevron-down.svg" alt="chevron-down" />
          </a>
          <a href="/test" class="link link-border">聯絡我</a>
        </nav>
      </header>
      <main>
        <section class="introduction">
          <div>
            <h1>Hi 我是呂沛騏</h1>
            <p class="introduce">我是位UI設計 也是對設計愛好者，致力於打造具有吸引力與易用性的界面設計以及追求使用者體驗的完美平衡</p>
            <div class="link-item">
              <a href="/test" class="w-180 link link-border">履歷</a>
              <a href="/test" class="w-180 link link-icon link-gradient">
                聯繫我
                <img src="/images/icon/chat-bubble-outline.svg" alt="chat-bubble-outline" />
              </a>
            </div>
          </div>
          <div>
            <img src="/images/avatar.png" alt="呂沛騏頭貼" />
          </div>
        </section>
        <section class="feature">
          <div class="gradient-icon">
            <img src="/images/icon/zap-fast.svg" alt="zap-fast" />
          </div>
          <h3 class="feature-title">打造你的專屬網站</h3>
          <p class="feature-discription">只要是你任何想到的 跟著一起打造設計UI介面以及你專屬的網站</p>
          <div class="feature-item">
            <div class="feature-card">
              <p class="digital">400 +</p>
              <h4 class="digital-content">已合作多家廠商</h4>
              <a href="/test" class="link-icon">
                了解更多
                <img src="/images/icon/arrow-right.svg" alt="arrow-right" />
              </a>
            </div>
            <div class="feature-card">
              <p class="digital">600 %</p>
              <h4 class="digital-content">投資報酬率</h4>
              <a href="/test" class="link-icon">
                了解更多
                <img src="/images/icon/arrow-right.svg" alt="arrow-right" />
              </a>
            </div>
            <div class="feature-card">
              <p class="digital">10 k</p>
              <h4 class="digital-content">已合作多家廠商</h4>
              <a href="/test" class="link-icon">
                了解更多
                <img src="/images/icon/arrow-right.svg" alt="arrow-right" />
              </a>
            </div>
            <div class="feature-card">
              <p class="digital">400 +</p>
              <h4 class="digital-content">滿星好評</h4>
              <a href="/test" class="link-icon">
                了解更多
                <img src="/images/icon/arrow-right.svg" alt="arrow-right" />
              </a>
            </div>
          </div>
        </section>
        <section class="skill">
          <div>
            <h2 class="skill-title">網站改版設計</h2>
            <p class="skill-content">致力於幫助您重新改版 提高網站的易用性，吸引更多的訪客並轉化為潛在客戶。我們也希望強化品牌形象，使網站與我們公司的價值觀和使命更加一致。</p>
            <a href="/test" class="w-180 link link-icon link-border">
              <img src="/images/icon/chat-bubble-solid.svg" alt="chat-bubble-solid" />
              了解更多
            </a>
          </div>
          <div>
            <img src="/images/mac-air.png" alt="mac-air" />
          </div>
        </section>
        <section class="portfolio">
          <img src="/images/portfolio/1.png" alt="portfolio1" width="320" height="320" />
          <img src="/images/portfolio/2.png" alt="portfolio2" width="320" height="320" />
          <img src="/images/portfolio/3.png" alt="portfolio3" width="320" height="320" />
          <img src="/images/portfolio/1.png" alt="portfolio4" width="320" height="320" />
          <img src="/images/portfolio/2.png" alt="portfolio5" width="320" height="320" />
        </section>
        <section class="information">
          <p class="slogan">跟著我一起打造你的專屬網頁</p>
          <a href="mailto:Amber0332@gmail.com" class="mail">Amber0332@gmail.com</a>
        </section>
        <section class="contact">
          <div>
            <img src="/images/contact.png" alt="contact" />
          </div>
          <div class="contact-form">
            <div class="row">
              <div class="column">
                <label for="">姓氏</label>
                <input type="text" class="text-field" />
              </div>
              <div class="column">
                <label for="">名字</label>
                <input type="text" class="text-field" />
              </div>
            </div>
            <div class="column">
              <label for="">Email 信件</label>
              <input type="text" class="text-field" />
            </div>
            <div class="column">
              <label for="">手機號碼</label>
              <input type="text" class="text-field" />
            </div>
            <div class="column">
              <label for="">訊息</label>
              <textarea name="" id="" cols="30" rows="10" class="text-field"></textarea>
            </div>
            <div class="row">
              <input type="checkbox" name="" id="" />
              <label for="">你是否同意我們的條款</label>
            </div>
            <a href="/test" class="link-gradient-square">聯繫我</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
