import { API_BASE_URL } from "../consts/base-url.const";
const createUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;

export const get = async (endpoint) => {
  try {
    const response = await fetch(createUrl(endpoint), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

export const post = async (endpoint, payload, config = {}) => {
  try {
    const response = await fetch(createUrl(endpoint), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};

export const put = async (endpoint, payload, config = {}) => {
  try {
    const response = await fetch(createUrl(endpoint), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("PUT Error:", error);
    throw error;
  }
};

export const remove = async (endpoint, config = {}) => {
  try {
    const response = await fetch(createUrl(endpoint), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("DELETE Error:", error);
    throw error;
  }
};
