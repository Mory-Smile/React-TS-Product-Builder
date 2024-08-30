import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
}

const Input = ({ ...rest }: IProps) => {
  return (
    <div key={"key"} className="flex flex-col">
      <input
        className="border-2 rounded-md p-2 border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 px-3 py-3 text-md"
        {...rest}
      />
    </div>
  );
};

export default Input;
