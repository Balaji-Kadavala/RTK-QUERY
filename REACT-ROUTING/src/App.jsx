import { Link, Outlet } from "react-router-dom";
function App()
{
  return (<div>
    <h1>React Routing</h1>
    <Link to="home">Home</Link><br/>
    <Link to="dashboard">Dashboard</Link><br/>
    <Link to="about">About</Link><br/>
    <Link to="contactUs">Contact Us</Link><br/>
    <Outlet></Outlet>
  </div>)
}

export default App;