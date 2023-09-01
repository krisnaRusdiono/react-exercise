
import { cssWrapper } from './style';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import { createContext, useEffect, useState } from 'react';

const question = (
  <ul>
    <li>primarily, user can input the value from <code>#mynumber</code></li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>Show <b>ODD</b> or <b>EVEN</b> in first render section</li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code> checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of input in <code>Comp1</code> and it's value in{' '}<code>Comp2</code>
    </li>
    <li><code>Comp2</code> will display latest inputted from <code>#mynumber</code> &amp; <code>#mynumber1</code></li>
    <li><code>Comp3</code> will display <code>#mynumber</code></li>
    <li>show <code>Comp4</code> modal when user click <b>Show Modal</b> button in <code>Comp3</code></li>
    <li>update whole <code>input</code> and value render when user input <code>#mynumber2</code></li>
  </ul>
);

export const contextFive = createContext();

const Test5 = () => {
  const [baseNumber, setBaseNumber] = useState(0);
  const [isOdd, setIsOdd] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleButtonEvent = (isIncrement) => {
    setBaseNumber(value => isIncrement ? Number(value) + 1 : Number(value) - 1);
  }

  const handleMyNumberChange = (changeEvent) => {
    const { target } = changeEvent || {};
    setBaseNumber(Number(target.value));
  }

  // useEffect can be replaced by using calculateOddEven and attach on every change events!
  useEffect(() => {
    setIsOdd(baseNumber % 2 === 0);
  }, [baseNumber])

  // eslint-disable-next-line no-unused-vars
  const calculateOddEven = () => {
    setIsOdd(baseNumber % 2 === 0);
  }

  const contextValue = {
    baseNumber, 
    setBaseNumber, 
    showModal, 
    setShowModal
  }

  return(
    <div>
      {question}
      <button id="numbermin" type="button" onClick={() => handleButtonEvent(false)}>-</button>
      <input id="mynumber" type="number" placeholder="input mynumber" value={baseNumber} onChange={handleMyNumberChange}/>
      <button id="numberplus" type="button" onClick={() => handleButtonEvent(true)}>+</button>
      <br/>
      <br/>
      <div className={cssWrapper}>
        The inputted value is [<strong>{isOdd ? 'ODD' : 'EVEN'}</strong>]* 
      </div>
      <Comp1 baseNumber={baseNumber} onChangeBaseNumber={setBaseNumber} />
      <contextFive.Provider value={contextValue}>
        <Comp3 />
      </contextFive.Provider>
    </div>
  )
}

export default Test5;