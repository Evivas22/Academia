
function Table({ data, excludedKeys }) {
  
  const columnHeaders = data[0]
    ? Object.keys(data[0]).filter((key) => !excludedKeys.includes(key))
    : [];

  console.log(columnHeaders)
  return data && data.length > 0 ? (
    <div className="h-full w-full p-4 gap-4 border grid grid-cols-10 grid-rows-6">
      <div className="border flex flex-col items-center justify-center  row-start-1 col-start-1 col-span-full">
        <div className="flex w-full items-center justify-center border border-color-warning">
           {columnHeaders.map((header, index) => (
            <div className="border w-full text-center" key={index}>{header}</div>
          ))} 
        </div>
      </div>

      <div className="border w-full flex flex-col items-center justify-start row-start-2 row-span-full col-start-1 col-span-full">
        {data.map((row, rowIndex) => (
          <div className="flex w-full items-center justify-around border border-color-warning" key={rowIndex}>
            {columnHeaders.map((header, index) => (
              <div className="border w-full" key={index}>{row[header]}</div>
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
