import CCard from '../CCard';

type CItemFieldProps = {
  title: string;
  description: string;
  component: React.ReactNode;
};

const CItemField = ({ title, description, component }: CItemFieldProps) => {
  return (
    <CCard className="flex justify-between p-6">
      <div className="flex flex-col">
        <p className="text-lg">{title}</p>
        <p className="text-cadetBlue text-sm">{description}</p>
      </div>
      <div className="inline-flex gap-2">{component}</div>
    </CCard>
  );
};

export default CItemField;
