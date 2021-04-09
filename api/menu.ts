import axios from "axios";

const API_URL = "https://affiliate-backend00.herokuapp.com/api";
const MENU = "/menu";

async function getMenu() {
  try {
    const response = await axios.get(`${API_URL}${MENU}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function postMenu(
  item: string,
  successCallback: Function,
  errorCallback: Function
) {
  try {
    await axios.post(`${API_URL}${MENU}`, {
      name: item,
      slug: item,
      depth: 0
    });
    successCallback("Je hebt het menu item toegevoegd");
  } catch (error) {
    errorCallback(error.response.data);
  }
}

async function editMenu(
  menuItems: any,
  successCallback: Function,
  errorCallback: Function
) {
  try {
    await axios.put(`${API_URL}${MENU}`, { menuItems });
    successCallback("Je hebt het menu item toegevoegd");
  } catch (error) {
    errorCallback(error.response.data);
  }
}

async function deleteMenu(
  name: string,
  successCallback: Function,
  errorCallback: Function
) {
  try {
    await axios.delete(`${API_URL}${MENU}`, {
      data: {
        name
      }
    });
    successCallback("Je hebt het menu item toegevoegd");
  } catch (error) {
    errorCallback(error);
  }
}

export { getMenu, postMenu, deleteMenu, editMenu };
