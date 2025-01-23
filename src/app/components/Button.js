"use client";

const Button = () => {
  return (
    <div>
      <button
        className="bg-blue-600 rounded-sm px-2 py-1 mt-4"
        onClick={() => console.log("Button clicked")}
      >
        Click here
      </button>
    </div>
  );
};

export default Button;
