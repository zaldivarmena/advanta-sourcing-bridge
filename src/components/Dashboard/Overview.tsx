
import React from 'react';
import { BarChart3, TrendingUp, AlertTriangle, CheckCircle, Users, Search } from 'lucide-react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '../UI/Card';
import AnimatedTransition from '../UI/AnimatedTransition';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for charts
const supplierPerformanceData = [
  { name: 'Jan', performance: 65 },
  { name: 'Feb', performance: 59 },
  { name: 'Mar', performance: 80 },
  { name: 'Apr', performance: 81 },
  { name: 'May', performance: 56 },
  { name: 'Jun', performance: 55 },
  { name: 'Jul', performance: 40 },
];

const supplierStatusData = [
  { name: 'Active', value: 24 },
  { name: 'Pending', value: 8 },
  { name: 'Issue', value: 3 },
];

const Overview: React.FC = () => {
  return (
    <div className="space-y-6">
      <AnimatedTransition type="fade">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <h1 className="heading-2">Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage your supplier relationships</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button icon={<Search size={18} />}>
              <Link to="/suppliers">Find New Suppliers</Link>
            </Button>
          </div>
        </div>
      </AnimatedTransition>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatedTransition type="scale" delay={100}>
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Total Suppliers</span>
                <Users className="text-primary h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">35</div>
              <p className="text-xs text-muted-foreground mt-1">Across 12 categories</p>
            </CardContent>
          </Card>
        </AnimatedTransition>
        
        <AnimatedTransition type="scale" delay={200}>
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Average Performance</span>
                <TrendingUp className="text-green-500 h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">87%</div>
              <p className="text-xs text-green-500 mt-1">↑ 4% from last month</p>
            </CardContent>
          </Card>
        </AnimatedTransition>
        
        <AnimatedTransition type="scale" delay={300}>
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Risk Alerts</span>
                <AlertTriangle className="text-amber-500 h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <p className="text-xs text-amber-500 mt-1">Requires your attention</p>
            </CardContent>
          </Card>
        </AnimatedTransition>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedTransition type="fade" delay={400}>
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Supplier Performance Trend</span>
                <BarChart3 className="text-primary h-5 w-5" />
              </CardTitle>
              <CardDescription>Average performance score over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={supplierPerformanceData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="performance" fill="hsl(var(--primary))" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </AnimatedTransition>
        
        <AnimatedTransition type="fade" delay={500}>
          <Card variant="glass">
            <CardHeader>
              <CardTitle>Recent Supplier Activity</CardTitle>
              <CardDescription>Latest updates from your suppliers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-start">
                    <div className={`p-2 rounded-full ${i === 0 ? 'bg-green-100' : i === 1 ? 'bg-blue-100' : 'bg-amber-100'} mr-3`}>
                      {i === 0 ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : i === 1 ? (
                        <TrendingUp className="h-4 w-4 text-blue-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {i === 0 ? 'TechSupply Inc. delivered order #3842' : 
                         i === 1 ? 'Global Parts Mfg performance improved by 12%' : 
                         'EcoMaterials Co. reported potential shipment delay'}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {i === 0 ? '2 hours ago' : i === 1 ? 'Yesterday' : '3 days ago'}
                      </p>
                    </div>
                  </div>
                ))}
                
                <Button variant="link" className="px-0">View all activity</Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedTransition>
      </div>
    </div>
  );
};

export default Overview;
