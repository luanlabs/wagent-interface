import CRadioButtonGroup from '@/components/CRadioButtonGroup';
import { BasicOptionType } from '@/models';

interface ChartTimeStampsProp {
  onChange?: (option: BasicOptionType<string>) => void;
}

const timeStampOptions = [
  { value: '1d', label: '1D' },
  { value: '5d', label: '5D' },
  { value: '1m', label: '1M' },
  { value: '1y', label: '1Y' },
  { value: 'all', label: 'All' },
];

const ChartTimeStamps = ({ onChange }: ChartTimeStampsProp) => {
  const handleChange = (e: BasicOptionType<string>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <CRadioButtonGroup
      options={timeStampOptions}
      defaultOption={timeStampOptions[0]}
      onChange={handleChange}
    />
  );
};

export default ChartTimeStamps;
