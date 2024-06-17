import CCoinLabel from '@/components/CCoinLabel';
import CStatusCard from '@/components/CStatusCard';

const customLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="">
      <div className="space-y-[14px]">
        {payload.map((entry: any, index: any) => (
          <CCoinLabel
            key={`item-${index}`}
            name={entry.value}
            logo={require(`/public/images/tokens/${entry.value.toLowerCase()}.svg`)}
          />
        ))}
      </div>
    </div>
  );
};

export default customLegend;
