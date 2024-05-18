interface inputProps {
  labelText: string;
  inputType: string;
  inputPlaceholder: string;
}
const Input = ({ labelText, inputType, inputPlaceholder }: inputProps) => {
  return (
    <>
      <label htmlFor="" className="block text-buttonText font-bold">
        {labelText}
      </label>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        className="outline-none w-full text-dark border-b-2 border-b-dark pb-2 mt-4 text-smallText placeholder-dark"
      />
    </>
  );
};

export default Input;
