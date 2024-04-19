import './App.css';
import Header from './component/Header'
import Introduction from './component/Introduction'
import Feature from './component/Feature'
import Skill from './component/Skill'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Feature />
        <Skill/>
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
