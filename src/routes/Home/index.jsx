import { useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state);
  console.log("============ Redux ============", state);

  return (
    <div className="App">
      <div className="logo-box"></div>
      <h2>Hi, I'm Umang Full Stack Developer / Designer </h2>
      <h3>This app is built using Electron + React + Redux + Vite.</h3>
    </div>
  );
}
