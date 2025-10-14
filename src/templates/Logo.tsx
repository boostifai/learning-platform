type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src={`/assets/images/boostifai-logo.png`}
        width="184"
        height="72"
        alt="Logo"
      />
    </span>
  );
};

export { Logo };
