function Button({ text, className }) {
  return (
    <>
      <div>
        <button
          to="/"
          className={`w-full text-white px-8 py-3 rounded-xl cursor-pointer font-bold transition duration-150 delay-100 ease-in-out ${className}`}
        >
          {text}
        </button>
      </div>
    </>
  );
}

export default Button;
