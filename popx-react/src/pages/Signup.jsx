import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // save user data
    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("isAuth", "true");

    // navigate to profile
    navigate("/profile");
  };

  return (
    <div className="signup-page">
      <h1 className="signup-title">
        Create your<br />PopX account
      </h1>

      <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-fields">
        <div className="field">
          <label className="field-label">
            Full Name<span>*</span>
          </label>
          <input
            className="field-input"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label className="field-label">
            Phone number<span>*</span>
          </label>
          <input
            className="field-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label className="field-label">
            Email address<span>*</span>
          </label>
          <input
            className="field-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label className="field-label">
            Password<span>*</span>
          </label>
          <input
            type="password"
            className="field-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label className="field-label">Company name</label>
          <input
            className="field-input"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="radio-group">
          <div className="radio-title">
            Are you an Agency?<span style={{ color: "#dd4a3d" }}>*</span>
          </div>

          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                value="Yes"
                onChange={handleChange}
              />{" "}
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="No"
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>
        </div>
</div>
        <button type="submit" className="signup-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
