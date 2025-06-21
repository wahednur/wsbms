import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/headers/header/Header";

const RootLayout = () => {
  return (
    <div className="overflow-hidden">
      <header>
        <Header />
      </header>
      <main className="vh-height">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
