import { useState } from 'react';
import Input from "./Input";
import Table from "./Table";
import DATA from './_data';

const Test4 = () => {
  const [tableData, setTableData] = useState(DATA);
  const [search, setSearch] = useState('');

  const handleSearch = (keyword) => {
    setSearch(keyword);
  }

  const applySearch = () => {
    const modifiedTableData = DATA.filter(
      (data) => data.name.toLowerCase().includes(search.toLowerCase())
    );

    setTableData(modifiedTableData);
  }

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input onSearch={handleSearch} applySearch={applySearch}/>
      <div>
        <Table tableData={tableData}/>
      </div>
    </div>
  )
}

export default Test4;