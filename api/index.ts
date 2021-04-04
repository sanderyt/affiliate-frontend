import axios from "axios";

const API_URL = "https://affiliate-backend00.herokuapp.com/api";
const MENU = "/menu";

async function postMenu(
  item: string,
  successCallback: Function,
  errorCallback: Function
) {
  try {
    await axios.post(`${API_URL}${MENU}`, {
      name: item,
      slug: item
    });
    successCallback("Je hebt het menu item toegevoegd");
  } catch (error) {
    errorCallback(error);
  }
}

export { postMenu };
