interface btnProps {
  btnTitle: string;
  btnCss: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
}

const index = ({ btnTitle, btnCss, onClick, disabled }: btnProps) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${btnCss}`}>
      {btnTitle}
    </button>
  );
};

export default index;
