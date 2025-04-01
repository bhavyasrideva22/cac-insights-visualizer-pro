
import { BadgeIndianRupee } from "lucide-react";

const CACSummary = () => {
  return (
    <div className="calculator-card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <div className="bg-brand-primary rounded-full p-4">
          <BadgeIndianRupee size={32} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-brand-primary mb-1">CAC Calculator</h2>
          <p className="text-brand-text">
            Calculate your Customer Acquisition Cost efficiently and make data-driven decisions
          </p>
        </div>
      </div>
      
      <div>
        <p className="text-lg mb-4">
          Our CAC (Customer Acquisition Cost) Calculator helps businesses understand the financial investment
          required to acquire new customers through paid advertising channels and SaaS-focused marketing.
        </p>
        <p className="mb-4">
          With this tool, you can:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Track total marketing and sales expenses</li>
          <li>Visualize cost breakdowns across different acquisition channels</li>
          <li>Calculate per-customer acquisition costs</li>
          <li>Download or email professional reports for presentations</li>
        </ul>
      </div>
    </div>
  );
};

export default CACSummary;
