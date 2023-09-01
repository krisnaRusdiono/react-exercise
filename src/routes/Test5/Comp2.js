import { cssWrapper } from './style';

const Comp2 = ({displayNumber}) => {
  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: {displayNumber} *</div>
    </>
  )
}

export default Comp2;