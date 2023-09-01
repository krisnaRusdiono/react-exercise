import { cssWrapper } from './style';

import { useEffect, useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = ({baseNumber, onChangeBaseNumber}) => {
  const [localNumber, setLocalNumber] = useState(baseNumber);
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleCheckboxChange = (changeEvent) => {
    const { target } = changeEvent;
    setCheckboxValue(target.checked);
  }

  const handleInputChange = (changeEvent) => {
    const { target } = changeEvent || {};
    setLocalNumber(Number(target.value))
  }

  useEffect(() => {
    if (checkboxValue) {
      setLocalNumber(baseNumber);
    }
  }, [baseNumber, checkboxValue])

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={checkboxValue} onChange={handleCheckboxChange}/>
        {/* only show when overwrite is checked */}
        {
          checkboxValue && (
            <input id="mynumber1" type="number" placeholder="input mynumber1" value={localNumber} onChange={handleInputChange}/>
          )
        }
      </label>
      <Comp2 displayNumber={checkboxValue ? localNumber : baseNumber } />
    </div>
  )
}

export default Comp1;