import CInput from '../CInput';

interface CInputLabelProps {
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CInputLabel = ({ placeholder, onChange }: CInputLabelProps) => {
  const handleCInputLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div className="relative overflow-hidden">
      <CInput
        inputClassName="!border-gray"
        placeholder={placeholder}
        onChange={handleCInputLabelChange}
      />
      <div
        className="bg-white flex justify-center items-center select-none space-x-2 px-3 rounded-r-lg  
       text-cadetBlue h-10 text-[14px] font-medium absolute bottom-0 right-0 cursor-pointer transition border border-gray border-l-0"
      >
        <span>Days</span>
      </div>
    </div>
  );
};
export default CInputLabel;
