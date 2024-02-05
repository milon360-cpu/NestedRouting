import Header from "../../Componenets/Header/Header";
import Navigation from "../../Componenets/Navifation/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import "./Dashboard.css"
import DashboardComponent from "../../Componenets/DashboardComponent/DashboardComponent";
const Dashboard = () => {
    const location = useLocation();
    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-menu">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-12">
                        <nav className="mt-2">
                             <Navigation />
                        </nav>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-12">
                        <div style={{backgroundColor:"white"}} className="mt-2 p-2">
                            {location.pathname === "/dashboard" ? <DashboardComponent/> : <Outlet />}
                        </div> 
                    </div>
                </div>             
            </div>
        </div>
    );
};


               
export default Dashboard;