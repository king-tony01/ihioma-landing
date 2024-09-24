import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
