import "./SubmitBtn.scss";

export const SubmitBtn = ({ value }: { value: string }) => {
  return (
    <button type="submit" className="btn">
      {value}
    </button>
  );
};
