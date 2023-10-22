
function Table({ data, excludedKeys }) {
  
  const columnHeaders = data[0]
    ? Object.keys(data[0]).filter((key) => !excludedKeys.includes(key))
    : [];

  console.log(columnHeaders)
  return data && data.length > 0 ? (
    <div >
      <div>
        <div>
           {columnHeaders.map((header, index) => (
            <div key={index}>{header}</div>
          ))} 
        </div>
      </div>

      <div>
        {data.map((row, rowIndex) => (
          <div key={rowIndex}>
            {columnHeaders.map((header, index) => (
              <div key={index}>{row[header]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>no hay datos</h1>
  );
}

export default Table;
