export function getUserInfo() {
  return (
    JSON.parse(localStorage.getItem("userInfo")) ||
    JSON.parse(sessionStorage.getItem("userInfo")) ||
    {}
  );
}
