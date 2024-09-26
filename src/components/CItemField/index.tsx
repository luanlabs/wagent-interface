import CCard from '../CCard';

type CItemFieldProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const CItemField = ({ title, description, children }: CItemFieldProps) => {
  return (
    <CCard className="flex justify-between p-6 mobile:flex-col mobile:space-y-4">
      <div className="flex flex-col">
        <p className="text-lg">{title}</p>
        <p className="text-cadetBlue text-sm">{description}</p>
      </div>
      <div className="inline-flex gap-2">{children}</div>
    </CCard>
  );
};

export default CItemField;
