export default function auth() {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("auth")) {
      return true;
      //   return JSON.parse(localStorage.getItem("auth"));
    }
    return false;
  }
  return false;
}
