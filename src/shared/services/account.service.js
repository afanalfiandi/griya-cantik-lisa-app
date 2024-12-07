import { API_BASE_URL } from "../consts/base-url.const";
import { get } from "./http.service";

export const onUpdateProfile = async (
  customerID,
  username,
  password,
  firstName,
  lastName
) => {
  try {
    const url = API_BASE_URL + "customer/update/" + customerID;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};

export const onUpdateImg = async (customerID, img) => {
  try {
    const url = API_BASE_URL + "customer/update/" + customerID;
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //     firstName: firstName,
    //     lastName: lastName,
    //   }),
    // });

    // const data = await response.json();
    return img;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};
