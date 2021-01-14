const Input = ({ type, value, placeholder, onChange }) => {
  console.log(placeholder);
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
