const Input = ({onSearch, applySearch}) => {

  const handleSubmit = (formEvent) => {
    formEvent.preventDefault();
    applySearch();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search" onChange={changeEvent => onSearch(changeEvent.target.value)} />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
