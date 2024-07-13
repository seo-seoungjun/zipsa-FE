import React from 'react';
import './App.css';
import Intro from './components/intro.js';
import { intro, home, team, checklist, teamIntro } from './data/img.js';
import ReactFullpage from '@fullpage/react-fullpage';
import Btn from './components/btn';
import Content from './components/content';
import BackBtn from './components/backBtn';
import OutTro from './components/outTro';

function App() {
  return (
    <div>
      <BackBtn />
      <Btn />
      <ReactFullpage
        //fullpage options
        licenseKey={process.env.REACT_APP_lisence_key}
        scrollingSpeed={1000}
        dragAndMove={true}
        scrollBar={true} /* Options here */
        afterLoad={(origin, destination, direction) => {
          const upDownBtn = document.querySelector('.upDownBtn');
          var loadedSection = this;
          //using index
          if (origin.index == 17) {
            upDownBtn.style.display = 'none';
          } else if (destination.index == 18) {
            upDownBtn.style.display = 'none';
          } else {
            upDownBtn.style.display = 'flex';
          }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <ReactFullpage.Wrapper>
                {intro.map((item, index) => (
                  <Intro
                    name={item.name}
                    img={item.img}
                    text={item.text}
                    textSize={item.textSize}
                    bottom={item.bottom}
                    key={index}
                  />
                ))}
                {home.map((item, index) => (
                  <Content
                    name={item.name}
                    img={item.img}
                    key={index}
                    cat={item.cat}
                    height1={item.height1}
                    height2={item.height2}
                    left={item.left}
                    top={item.top}
                    talk1={item.talk1}
                    talk2={item.talk2}
                    talk3={item.talk3}
                  />
                ))}
                {teamIntro.map((item, index) => (
                  <Intro
                    name={item.name}
                    img={item.img}
                    text={item.text}
                    textSize={item.textSize}
                    bottom={item.bottom}
                    key={index}
                  />
                ))}
                {team.map((item, index) => (
                  <Content
                    name={item.name}
                    img={item.img}
                    key={index}
                    cat={item.cat}
                    height1={item.height1}
                    height2={item.height2}
                    left={item.left}
                    top={item.top}
                    talk1={item.talk1}
                    talk2={item.talk2}
                    talk3={item.talk3}
                  />
                ))}
                {checklist.map((item, index) => (
                  <Content
                    name={item.name}
                    img={item.img}
                    key={index}
                    cat={item.cat}
                    height1={item.height1}
                    height2={item.height2}
                    height3={item.height3}
                    left={item.left}
                    top={item.top}
                    talk1={item.talk1}
                    talk2={item.talk2}
                    talk3={item.talk3}
                  />
                ))}
                <OutTro
                  img={'/img/jeep/checklist/checklist-6.svg'}
                  question={'img/jeep/question.svg'}
                  comment={'/img/jeep/comment.svg'}
                  email={'/img/jeep/email.svg'}
                  thank={'/img/jeep/thank.svg'}
                />
              </ReactFullpage.Wrapper>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
