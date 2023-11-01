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
    console.log(error);
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

export async function deleteDataById(url) {
  try {
    const response = await axios.get(`http://localhost:3000/api/${url}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
