const CustomAxisTick = (props: any, activeIndex: number) => {
  const { x, y, payload, index } = props;
  return (
    <text x={x} y={y + 16} textAnchor="middle" fill={index === activeIndex ? '#000' : '#D0D5DD'}>
      {payload.value}
    </text>
  );
};

export default CustomAxisTick;
