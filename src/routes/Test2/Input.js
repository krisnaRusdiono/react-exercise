const Input = ({value, setValue}) => {
  return <input type="text" placeholder="input here" onChange={(e) => setValue(e.target.value)} value={value}/>
}

export default Input;
