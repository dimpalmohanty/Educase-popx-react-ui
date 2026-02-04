import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h2 className="landing-title">Welcome to PopX</h2>

        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
        </p>

        <button
          className="landing-btn primary"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="landing-btn secondary"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
