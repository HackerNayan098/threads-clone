interface buttonProps {
  btnTitle: string;
  cssClass: string;
  onClick?: (e: any) => void;
}

const Button = ({ btnTitle, cssClass, onClick }: buttonProps) => {
  return (
    <button onClick={onClick} className={`${cssClass}`}>
      {btnTitle}
    </button>
  );
};

export default Button;
