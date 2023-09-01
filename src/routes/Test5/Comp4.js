import { useContext } from 'react';
import { cssWrapper, cssModalRight } from './style';
import { contextFive } from '.';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { 
    baseNumber,
    setBaseNumber,
    setShowModal 
  } = useContext(contextFive);

  const handleInputChange = (changeEvent) => {
    const { target } = changeEvent || {};
    setBaseNumber(Number(target.value))
  }

  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button" onClick={() => setShowModal(prev => prev = !prev)}>⊗</button>
        </div>
        <input id="mynumber2" type="number" placeholder="input mynumber2" value={baseNumber} onChange={handleInputChange}></input>
      </div>
    </>
  )
}

export default Comp4;