import { PieChart, Pie, Cell } from "recharts";

const data01 = [
  { name: "Group A", value: 1200 },
  { name: "Group B", value: 1000 },
];
const COLORS = ["#FF444A", "#00C49F"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <PieChart width={1000} height={800}>
        <Pie
          data={data01}
          dataKey="value"
          cx={600}
          cy={350}
          fill="#8884d8"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="md:flex md:flex-row flex-col gap-4 md:gap-14 justify-center">
        <div className="flex gap-4">
          <h4 className="text-black text-xl">Your Donation</h4>
          <span className="border-x-[60px] border-y-[12px]	rounded border-emerald-500"></span>
        </div>
        <div className="flex gap-4">
          <h4 className="text-black text-xl">Total Donation</h4>
          <span className="border-x-[60px] border-y-[12px]	rounded border-red-500"></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
