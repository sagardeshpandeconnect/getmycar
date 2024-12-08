import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Function to handle GET requests
export const getData = async function (endpoint, config = {}) {
  try {
    const response = await axiosInstance.get(endpoint, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to handle POST requests
export const postData = async function (endpoint, data = {}, config = {}) {
  try {
    const response = await axiosInstance.post(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Function to handle PUT requests
export const putData = async function (endpoint, data = {}, config = {}) {
  try {
    const response = await axiosInstance.put(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Function to handle DELETE requests
export const deleteData = async function (endpoint, config = {}) {
  try {
    const response = await axiosInstance.delete(endpoint, config);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
