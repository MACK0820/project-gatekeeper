const InputField = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
        required
      />
    </div>
  );
};

export default InputField;
