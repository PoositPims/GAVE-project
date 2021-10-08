import jwtDecode from "jwt-decode";

const TOKEN_NAME = "token";
// "token" คือ key ชื่อ token

const getToken = () => localStorage.getItem(TOKEN_NAME);
// ไปเอา token จาก localStorage มา
const setToken = (token) => localStorage.setItem(TOKEN_NAME, token);
const removeToken = () => localStorage.removeItem(TOKEN_NAME);
// clear localStorage ที่มีชื่อ  TOKEN_NAME
const user = getToken() ? jwtDecode(getToken()) : null;
// check ว่า getToken มีค่าไหม ถ้ามีก็จะไปเอาค่า payload เราไปเก็บใน user
// user คือ payload ที่ซ่อนอยู่ใน token

export { getToken, setToken, removeToken, user };
