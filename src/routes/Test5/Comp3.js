import { cssWrapper } from "./style";

import { useContext, useState } from "react";
import Comp4 from "./Comp4";
import { contextFive } from '.';

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const { 
    baseNumber,
    showModal,
    setShowModal
  } = useContext(contextFive);

  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {baseNumber}*</div>
      <button type="button" onClick={() => setShowModal(prev => prev = !prev)}>Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;