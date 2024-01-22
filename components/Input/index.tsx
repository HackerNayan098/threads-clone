interface inputProps {
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (e: any) => void;
  elem?: React.ReactElement;
  elemClass?: string;
}

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  elem,
  elemClass,
}: inputProps) => {
  return (
    <div className="w-full relative flex items-center justify-between dark:text-white text-black border-2 p-[0.7rem] my-4 rounded-md  text-md shadow-[0px 1px 15px rgba(0, 0, 0, 0.2)]">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full outline-none text-lg bg-transparent"
      />
      <span className={elemClass}>{elem}</span>
    </div>
  );
};

export default Input;
