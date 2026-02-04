// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Input from "../components/Input";
// import Button from "../components/Button";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     localStorage.setItem("isAuth", "true");
//     navigate("/profile");
//   };

//   return (
//     <div className="container">
//       <h3>Signin to your PopX account</h3>

//       <Input label="Email Address" onChange={e => setEmail(e.target.value)} />
//       <Input label="Password" type="password" onChange={e => setPassword(e.target.value)} />

//       <Button
//         text="Login"
//         disabled={!email || !password}
//         onClick={handleLogin}
//       />
//     </div>
//   );
// };

// export default Login;



// import Input from "../components/Input";
// import Button from "../components/Button";

// const Login = () => {
//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2 className="auth-title">Login</h2>

//         <div className="page">
//   <div className="page-content">
//     <h2 className="page-title">Signin to your PopX account</h2>
//     <p className="page-subtitle">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//     </p>

//     <form className="form">
//       <Input label="Email address" placeholder="Enter email address" />
//       <Input label="Password" type="password" placeholder="Enter password" />
//       <button className="primary-btn disabled">Login</button>
//     </form>
//   </div>
// </div>


//         <div className="auth-footer">
//           Don’t have an account? <a href="/signup">Sign up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


const Login = () => {
  return (
    <div className="login-page">
      <div className="login-title">
        Signin to your<br />PopX account
      </div>

      <div className="login-subtitle">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
      </div>

      <form className="login-form">
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            className="input-field"
            placeholder="Enter email address"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            className="input-field"
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button className="login-btn" disabled>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
