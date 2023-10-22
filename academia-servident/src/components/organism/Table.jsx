
function Table({ data, excludedKeys }) {
  
  const columnHeaders = data[0]
    ? Object.keys(data[0]).filter((key) => !excludedKeys.includes(key))
    : [];

  // function rederizarRow(item) {
  //   const { __v, _id, ...extras } = item;
  //   let infoReturn = [];
  //   setColum(Object.keys(extras))
  //   for (const key in extras) {
  //     const element = extras[key];
  //     infoReturn.push(<td>{element}</td>);
    
  //   }
  
  //   return infoReturn;
  // }
  console.log(columnHeaders)
  return data && data.length > 0 ? (
    <table>
      <thead>
        <tr>
           {columnHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))} 
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columnHeaders.map((header, index) => (
              <td key={index}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>no hay datos</h1>
  );
}

export default Table;
