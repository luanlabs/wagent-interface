import CTokenLabel from '@/components/CTokenLabel';
import { PayloadItem } from '@/models';

interface CustomLegendProps {
  payload: PayloadItem[];
}

const CustomLegend = ({ payload }: CustomLegendProps) => {
  return (
    <div>
      <div className="space-y-[14px]">
        {payload.map((entry, index) => (
          <CTokenLabel
            key={`item-${index}`}
            symbol={entry.value}
            logo={require(`/public/images/tokens/${entry.value.toLowerCase()}.svg`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomLegend;
