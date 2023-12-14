interface inputProps {
  type: string;
  placeholder: string;
  name: string;
  value?: any;
  onChange?: (e: any) => void;
  elem?: React.ReactElement;
}

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  elem,
}: inputProps) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white border-2 p-[0.7rem] my-4 rounded-md outline-none text-md shadow-[0px 1px 15px rgba(0, 0, 0, 0.2)] "
      />
      <span className="absolute right-[20px] top-[27px]">{elem}</span>
    </div>
  );
};

export default Input;
