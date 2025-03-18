
import React, { useState } from 'react';
import SupplierCard from '../Dashboard/SupplierCard';
import { Filter, SortDesc, Grid, List } from 'lucide-react';
import AnimatedTransition from '../UI/AnimatedTransition';
import Button from '../UI/Button';

// Sample supplier data
const sampleSuppliers = [
  {
    id: '1',
    name: 'TechSupply Inc.',
    category: 'Electronics',
    performance: 92,
    status: 'active' as const,
    lastDelivery: '2 days ago'
  },
  {
    id: '2',
    name: 'Global Parts Mfg',
    category: 'Manufacturing',
    performance: 78,
    status: 'active' as const,
    lastDelivery: '1 week ago'
  },
  {
    id: '3',
    name: 'EcoMaterials Co.',
    category: 'Raw Materials',
    performance: 65,
    status: 'issue' as const,
    lastDelivery: '3 weeks ago'
  },
  {
    id: '4',
    name: 'Precision Tools Ltd.',
    category: 'Tools & Equipment',
    performance: 88,
    status: 'active' as const,
    lastDelivery: '4 days ago'
  },
  {
    id: '5',
    name: 'FastShip Logistics',
    category: 'Logistics',
    performance: 72,
    status: 'pending' as const,
    lastDelivery: '1 month ago'
  },
  {
    id: '6',
    name: 'Office Essentials',
    category: 'Office Supplies',
    performance: 95,
    status: 'active' as const,
    lastDelivery: 'Yesterday'
  },
];

interface SupplierListProps {
  suppliers?: typeof sampleSuppliers;
  isLoading?: boolean;
}

const SupplierList: React.FC<SupplierListProps> = ({
  suppliers = sampleSuppliers,
  isLoading = false
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  return (
    <div className="space-y-6">
      <AnimatedTransition type="fade">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Suppliers</h2>
            <p className="text-sm text-muted-foreground">
              {suppliers.length} suppliers found
            </p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Button
              variant="outline"
              size="sm"
              icon={<Filter className="h-4 w-4" />}
            >
              Filter
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={<SortDesc className="h-4 w-4" />}
            >
              Sort
            </Button>
            
            <div className="border rounded-md flex">
              <button
                className={`p-2 ${viewMode === 'grid' ? 'bg-secondary' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                className={`p-2 ${viewMode === 'list' ? 'bg-secondary' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </AnimatedTransition>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-[180px] bg-secondary/50 animate-pulse rounded-xl" />
          ))}
        </div>
      ) : (
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {suppliers.map((supplier, index) => (
            <AnimatedTransition key={supplier.id} type="scale" delay={index * 100}>
              <SupplierCard supplier={supplier} />
            </AnimatedTransition>
          ))}
        </div>
      )}
    </div>
  );
};

export default SupplierList;
