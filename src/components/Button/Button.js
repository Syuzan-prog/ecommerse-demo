const Button = ({ children, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn btn-primary">
        {children}
      </button>
    </div>
  );
};

export default Button;
