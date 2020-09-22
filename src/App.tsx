import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import StartPage from './Panels/StartPage';
import Page from './Panels/Page';
import Result from './Panels/Result'

type AppProps = {
  weights : Array<number>
}

const App: React.FunctionComponent<AppProps> = ({weights}) => {

  const questionsArray: Array<string> = [
    "Вам нужна стиральная машина с закрузкой 5кг ?",
    "Вам нужна стиральная машина с закрузкой более 5кг ?",
    "Вам нужна стиральная машина с защитой от протечек ?",
    "Вам нужна стиральная машина с интенторным двигателем ?",
    "Вам нужна стиральная машина с кол-вом программ > 15 ?",
    "Вам нужна стиральная машина с классом А+ ?",
    "Вам нужна стиральная машина с классом А ?",
    "Вам нужна стиральная машина с более 800 оборотами ?",
    "Вам нужна стиральная машина с более 1200 оборотами ?",
    "Вам нужна стиральная машина сделаная в России ?",
    "Вам нужна стиральная машина сделаная в Китае ?",
    "Вам нужна стиральная машина сделаная в Японии ?",
    "Вам нужна стиральная машина стоимостью до 15к ?",
    "Вам нужна стиральная машина стоимостью от 15к до 30к ?",
  ];
  const questionsWeith: Array<number> = [0.2, 0.2, 0.5, 0.5, 0.1, 0.3, 0.2, 0.2, 0.3, 0.1, 0.1, 0.1, 0.25, 0.5];
  const awnser: Array<Array<boolean>> = [
    [false, true, false, false, true, true, false, true, true, false, false, true, false, false],
    [true, false, false, false, true, true, false, true, false, true, false, false, true, false],
    [true, false, false, false, true, false, true, false, false, true, false, true, false, false],
    [false, true, true, true, false, true, false, true, false, false, true, false, true, true],
    [false, true, true, true, true, false, true, false, true, false, false, false, true, false],
  ]
  const [startApp, setStartApp] = useState(false);
  const [index, setIndex] = useState(0);

  const setWeight = (index: number, anwser: boolean): void => {


    for (var i = 0; i < weights.length; ++i) {
      if (awnser[i][index] === anwser) weights[i] = weights[i] + questionsWeith[index];
    }
    if (index <= questionsArray.length - 1) {
      setIndex(prev => {
        prev++;
        return prev
      })
    }
  }
  return (
    <div className="App">
      {!startApp && <div className="Welcome">
        <a>Welcome, Click to find Washer</a>
        <button onClick={setStartApp.bind(null, true)} >Start</button>
      </div>
      }
      {startApp && index !== questionsArray.length && <Page title={questionsArray[index]} index={index} setWeight={setWeight} />}
      {index === questionsArray.length &&
        <Result weights={weights} />
      }
    </div>
  );
}

export default App;
