
import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, X } from 'lucide-react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '../UI/Card';
import Button from '../UI/Button';
import AnimatedTransition from '../UI/AnimatedTransition';

const AISearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    'Electronics manufacturers in Asia with ISO certification',
    'Sustainable packaging suppliers in Europe',
    'Automotive parts with next-day delivery'
  ]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
      
      // Add to recent searches if not already there
      if (!recentSearches.includes(searchQuery)) {
        setRecentSearches([searchQuery, ...recentSearches].slice(0, 5));
      }
    }, 2000);
  };
  
  const handleRemoveSearch = (index: number) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };
  
  return (
    <Card variant="glass" className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-primary/10 mr-3">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle>AI-Powered Supplier Search</CardTitle>
            <CardDescription>
              Use natural language to find the perfect suppliers for your needs
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSearch} className="relative mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              className="w-full pl-10 pr-20 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Describe what you're looking for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size="sm"
              isLoading={isSearching}
            >
              Search
            </Button>
          </div>
        </form>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Recent Searches</h3>
            {recentSearches.length > 0 && (
              <Button variant="link" size="sm" className="h-auto p-0" onClick={() => setRecentSearches([])}>
                Clear all
              </Button>
            )}
          </div>
          
          {recentSearches.length > 0 ? (
            <AnimatedTransition type="fade">
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between bg-secondary/50 rounded-lg p-3 hover:bg-secondary transition-colors"
                  >
                    <button 
                      className="flex-1 text-left flex items-center"
                      onClick={() => setSearchQuery(search)}
                    >
                      <Search className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span className="text-sm truncate">{search}</span>
                    </button>
                    <button 
                      className="ml-2 p-1 rounded-full hover:bg-muted"
                      onClick={() => handleRemoveSearch(index)}
                    >
                      <X className="h-3 w-3 text-muted-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            </AnimatedTransition>
          ) : (
            <p className="text-sm text-muted-foreground">No recent searches</p>
          )}
        </div>
        
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3">Search Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Manufacturing suppliers with ISO 9001 certification",
              "Sustainable packaging providers in North America",
              "Electronics components with 99% quality rating",
              "Fast delivery logistics partners in Europe"
            ].map((example, index) => (
              <AnimatedTransition key={index} type="fade" delay={index * 100}>
                <button
                  className="text-left p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all text-sm"
                  onClick={() => setSearchQuery(example)}
                >
                  {example}
                  <div className="flex items-center mt-1 text-primary text-xs font-medium">
                    <span>Try this</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </button>
              </AnimatedTransition>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AISearch;
