// import DATA from "./_data";

const Table = ({tableData}) => {
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {(tableData && tableData.length > 0 && tableData.map((data) => (
          <tr key={`${data.name}-${data.age}-${data.address}`}>
            <td>
              {data.name}
            </td>
            <td>
              {data.age}
            </td>
            <td>
              {data.address}
            </td>
          </tr>
        ))) || (
          <tr>
            <td colSpan="3">no data from given search keyword</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table;
