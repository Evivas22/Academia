
const fetchData = async (param) => {
    
    try {
      const response = await fetch(`http://localhost:3000/api/${param}`);
      const result = await response.json();
        const data=Array.isArray(result) ? result : [result];
      return data
    } catch (error) {
      console.error(error);
      throw error; // Opcional: Puedes lanzar una excepción para manejar errores en otros lugares.
    }
  };
  
  export default fetchData;
  