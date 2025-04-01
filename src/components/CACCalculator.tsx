
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { toast } from "sonner";
import CACVisualization from "./CACVisualization";
import { formatCurrency } from "@/lib/utils";

export interface CACData {
  marketingCost: number;
  salesTeamCost: number;
  toolsCost: number;
  otherCosts: number;
  customers: number;
  totalCost: number;
  cac: number;
  marketingPercentage: number;
  salesPercentage: number;
  toolsPercentage: number;
  otherPercentage: number;
}

const CACCalculator = () => {
  const [marketingCost, setMarketingCost] = useState(100000);
  const [salesTeamCost, setSalesTeamCost] = useState(200000);
  const [toolsCost, setToolsCost] = useState(50000);
  const [otherCosts, setOtherCosts] = useState(30000);
  const [customers, setCustomers] = useState(100);
  const [timeframe, setTimeframe] = useState("month");
  const [cacData, setCacData] = useState<CACData | null>(null);
  const [email, setEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  useEffect(() => {
    calculateCAC();
  }, [marketingCost, salesTeamCost, toolsCost, otherCosts, customers]);

  const calculateCAC = () => {
    const totalCost = marketingCost + salesTeamCost + toolsCost + otherCosts;
    const cac = customers > 0 ? totalCost / customers : 0;
    
    // Calculate percentages for visualization
    const marketingPercentage = (marketingCost / totalCost) * 100;
    const salesPercentage = (salesTeamCost / totalCost) * 100;
    const toolsPercentage = (toolsCost / totalCost) * 100;
    const otherPercentage = (otherCosts / totalCost) * 100;

    setCacData({
      marketingCost,
      salesTeamCost,
      toolsCost,
      otherCosts,
      customers,
      totalCost,
      cac,
      marketingPercentage,
      salesPercentage,
      toolsPercentage,
      otherPercentage
    });
  };

  const handleInputChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    // Remove non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, "");
    const parsedValue = parseFloat(numericValue);
    
    if (!isNaN(parsedValue)) {
      setter(parsedValue);
    } else if (value === "") {
      setter(0);
    }
  };

  const handleDownloadPDF = () => {
    // In a real app, this would generate a PDF with html2canvas and jsPDF
    // For now, we'll just show a toast
    toast.success("Your CAC report has been downloaded as PDF", {
      description: "Check your downloads folder for the report"
    });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter a valid email address");
      return;
    }

    // In a real app, this would send an email through an API
    // For now, we'll just show a toast
    toast.success("CAC Report sent successfully!", {
      description: `The report has been sent to ${email}`
    });
    setShowEmailForm(false);
    setEmail("");
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="calculator-card mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Input Parameters</h3>
            
            <div>
              <Label htmlFor="timeframe" className="text-brand-text mb-2 block">
                Timeframe
              </Label>
              <select
                id="timeframe"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="input-field"
              >
                <option value="month">Monthly</option>
                <option value="quarter">Quarterly</option>
                <option value="year">Yearly</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="marketing-cost" className="text-brand-text mb-2 block">
                Marketing Cost (₹)
              </Label>
              <Input
                id="marketing-cost"
                type="text"
                value={marketingCost.toLocaleString('en-IN')}
                onChange={(e) => handleInputChange(e.target.value, setMarketingCost)}
                className="input-field"
              />
              <Slider 
                value={[marketingCost]} 
                min={0}
                max={1000000}
                step={10000}
                onValueChange={(value) => setMarketingCost(value[0])}
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="sales-cost" className="text-brand-text mb-2 block">
                Sales Team Cost (₹)
              </Label>
              <Input
                id="sales-cost"
                type="text"
                value={salesTeamCost.toLocaleString('en-IN')}
                onChange={(e) => handleInputChange(e.target.value, setSalesTeamCost)}
                className="input-field"
              />
              <Slider 
                value={[salesTeamCost]} 
                min={0}
                max={1000000}
                step={10000}
                onValueChange={(value) => setSalesTeamCost(value[0])}
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="tools-cost" className="text-brand-text mb-2 block">
                Tools & Software Cost (₹)
              </Label>
              <Input
                id="tools-cost"
                type="text"
                value={toolsCost.toLocaleString('en-IN')}
                onChange={(e) => handleInputChange(e.target.value, setToolsCost)}
                className="input-field"
              />
              <Slider 
                value={[toolsCost]} 
                min={0}
                max={500000}
                step={5000}
                onValueChange={(value) => setToolsCost(value[0])}
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="other-cost" className="text-brand-text mb-2 block">
                Other Costs (₹)
              </Label>
              <Input
                id="other-cost"
                type="text"
                value={otherCosts.toLocaleString('en-IN')}
                onChange={(e) => handleInputChange(e.target.value, setOtherCosts)}
                className="input-field"
              />
              <Slider 
                value={[otherCosts]} 
                min={0}
                max={500000}
                step={5000}
                onValueChange={(value) => setOtherCosts(value[0])}
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="customers" className="text-brand-text mb-2 block">
                Number of New Customers
              </Label>
              <Input
                id="customers"
                type="text"
                value={customers.toString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
                  if (!isNaN(value) || e.target.value === "") {
                    setCustomers(value || 0);
                  }
                }}
                className="input-field"
              />
              <Slider 
                value={[customers]} 
                min={1}
                max={500}
                step={1}
                onValueChange={(value) => setCustomers(value[0])}
                className="mt-2"
              />
            </div>
          </div>
          
          {/* Results & Visualization */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-4">Your CAC Results</h3>
              
              {cacData && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-brand-background rounded-lg p-4">
                      <div className="text-sm text-brand-text/70">Total Acquisition Cost</div>
                      <div className="text-3xl font-bold text-brand-primary">
                        ₹{formatCurrency(cacData.totalCost)}
                      </div>
                    </div>
                    
                    <div className="bg-brand-background rounded-lg p-4">
                      <div className="text-sm text-brand-text/70">Customer Acquisition Cost (CAC)</div>
                      <div className="text-3xl font-bold text-brand-primary">
                        ₹{formatCurrency(cacData.cac)}
                        <span className="text-sm font-normal text-brand-text/70 ml-1">per customer</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-brand-text mb-4">Cost Breakdown</h4>
                    <CACVisualization data={cacData} />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
                    <div className="text-sm text-brand-text/70">
                      Based on {customers} new customers per {timeframe}
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        onClick={handleDownloadPDF}
                        className="btn-accent"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button
                        onClick={() => setShowEmailForm(!showEmailForm)}
                        variant="outline"
                        className="border-brand-primary text-brand-primary"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Email Report
                      </Button>
                    </div>
                  </div>
                  
                  {showEmailForm && (
                    <form onSubmit={handleSendEmail} className="mt-4 p-4 bg-brand-background rounded-lg animate-scale-in">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1 input-field"
                        />
                        <Button type="submit" className="btn-primary">
                          Send Report
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CACCalculator;
