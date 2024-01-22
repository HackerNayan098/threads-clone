interface btnProps {
  btnTitle: string;
  btnCss: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
}

const Button = ({ btnTitle, btnCss, onClick, disabled }: btnProps) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${btnCss}`}>
      {btnTitle}
    </button>
  );
};

export default Button;
