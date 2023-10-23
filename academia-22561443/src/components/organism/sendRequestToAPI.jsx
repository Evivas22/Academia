
 function sendRequestToAPI(selectedOption, formData) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
  
    return fetch(`http://localhost:3000/api/${selectedOption}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no se completó con éxito');
        }
        return response.json();
      });
  }
  export default sendRequestToAPI;