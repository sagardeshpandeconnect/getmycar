import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getData = async function (endpoint, config = {}) {
  try {
    const response = await axiosInstance.get(endpoint, config);
    return response.data;
  } catch (error) {
    // Handle errors gracefully
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be handled by the caller if necessary
  }
};

export const postData = async function (endpoint, data={}, config = {}) {
  try {
    const response = await axiosInstance.post(endpoint, data, config);
    return response.data
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const updateData = async function (endpoint, data, config = {}) {
  try {
    const response = await axiosInstance.put(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const deleteData = async function (endpoint, config = {}) {
  try {
    const response = await axiosInstance.delete(endpoint, config);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
