import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet.</p>

      <button onClick={() => navigate("/signup")}>
        Create Account
      </button>

      <button onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default Landing;
