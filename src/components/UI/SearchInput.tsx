
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Search, X } from 'lucide-react';

interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  onChange,
  onSubmit,
  placeholder = 'Search...',
  ...props
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  const handleClear = () => {
    setValue('');
    onChange?.('');
  };

  return (
    <form 
      className={cn(
        "relative flex w-full items-center",
        className
      )}
      onSubmit={handleSubmit}
    >
      <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
      
      <input
        type="text"
        className="h-10 w-full rounded-full bg-secondary pl-9 pr-12 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-0"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
      
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-12 p-1 rounded-full text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
      
      <button
        type="submit"
        className="absolute right-3 flex h-6 items-center justify-center rounded-md bg-primary px-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
