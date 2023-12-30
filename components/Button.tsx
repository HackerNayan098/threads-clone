interface buttonProps {
  btnTitle: string;
  cssClass: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
}

const Button = ({ btnTitle, cssClass, onClick, disabled }: buttonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${cssClass}`}>
      {btnTitle}
    </button>
  );
};

export default Button;
