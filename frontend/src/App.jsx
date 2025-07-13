import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <div style={{padding:"100px" ,fontFamily: "Arial" }}>
      {/* <Dashboard/> */}
      <Home />
    </div>
    </>
  );
}

export default App;
