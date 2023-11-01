import axios from "axios";

export async function getData(url) {
  try {
    const response = await axios.get(`http://localhost:3000/api/${url}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addData(url, formData) {
  const apiUrl = `http://localhost:3000/api/${url}`;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(apiUrl, formData, { headers });
    return response.data;
  } catch (error) {
    throw new Error("La solicitud no se completó con éxito");
  }
}

export async function getDataById(url) {
  try {
    const response = await axios.get(`http://localhost:3000/api/${url}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateDataById(url) {
  try {
    const response = await axios.get(`http://localhost:3000/api/${url}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteDataById(id, url) {
   try
   {
    const response = await axios.delete(`http://localhost:3000/api/${url}/${id}`)
    if (response.status === 200){
      console.log("Esto es lo que se está eliminando"+id);
      return response;
     }else {
      throw new Error("Error al eliminar");
    }
   } catch (error) {
    console.error("Error al eliminar", error);
    throw error;
   }
}
