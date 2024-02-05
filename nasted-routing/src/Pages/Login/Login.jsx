import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Admin Login</h2>
            <button className="btn btn-primary" onClick={()=> navigate("/dashboard")}>Login</button>
        </div>
    );
};

export default Login;