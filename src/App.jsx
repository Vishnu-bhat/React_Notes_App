import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import CenterPage from "./CenterPage";

const App = () => {
  return (
    <div className="container-fluid d-flex vh-100">
      <SideBar />
      <CenterPage />
    </div>
  );
};

export default App;
