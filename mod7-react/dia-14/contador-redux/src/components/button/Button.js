import "./button.css";

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="my-button">
      {children}
    </button>
  );
}

export default Button;
