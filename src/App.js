import './App.css';
import Header from './component/Header';
import Introduction from './component/Introduction';
import Feature from './component/Feature';
import Skill from './component/Skill';
import Portfolio from './component/Portfolio';
import Information from './component/Information';
import Contact from './component/Contact';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Feature />
        <Skill />
        <Portfolio />
        <Information />
        <Contact />
      </main>
    </>
  );
};

export default App;
