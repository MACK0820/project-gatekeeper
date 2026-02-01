const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  error
}) => {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={error ? "input-error" : ""}
        required
      />
    </div>
  );
};

export default InputField;
