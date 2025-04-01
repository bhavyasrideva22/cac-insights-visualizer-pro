
import { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import type { CACData } from './CACCalculator';
import { formatCurrency } from '@/lib/utils';

interface CACVisualizationProps {
  data: CACData;
}

const CACVisualization = ({ data }: CACVisualizationProps) => {
  const chartData = useMemo(() => [
    { name: 'Marketing', value: data.marketingCost, color: '#245e4f' },
    { name: 'Sales Team', value: data.salesTeamCost, color: '#7ac9a7' },
    { name: 'Tools & Software', value: data.toolsCost, color: '#e9c46a' },
    { name: 'Other Costs', value: data.otherCosts, color: '#4a8fe7' },
  ], [data]);
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-brand-primary font-medium">
            ₹{formatCurrency(payload[0].value)}
          </p>
          <p className="text-sm text-brand-text/70">
            {payload[0].payload.percentage.toFixed(1)}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  const renderLegend = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        {chartData.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: entry.color }} 
            />
            <div className="text-sm">
              <span className="font-medium">{entry.name}: </span>
              <span>₹{formatCurrency(entry.value)}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Calculate percentages for each segment
  const dataWithPercentages = chartData.map(item => {
    const percentage = (item.value / data.totalCost) * 100;
    return {
      ...item,
      percentage
    };
  });

  return (
    <div className="bg-white rounded-lg p-4 h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataWithPercentages}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {dataWithPercentages.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center">
        <div className="text-4xl font-bold text-brand-primary">
          ₹{formatCurrency(data.cac)}
        </div>
        <div className="text-sm text-brand-text/70">Cost per Customer</div>
      </div>
      {renderLegend()}
    </div>
  );
};

export default CACVisualization;
