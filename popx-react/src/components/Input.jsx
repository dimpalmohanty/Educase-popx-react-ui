const Input = ({ label, type = "text", ...props }) => {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <input type={type} {...props} />
    </div>
  );
};

export default Input;
