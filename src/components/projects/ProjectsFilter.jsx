import { useState } from 'react';

const ProjectsFilter = ({ activeFilter, onFilterChange }) => {
  // Filter categories
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'software', label: 'Software' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'iot', label: 'IoT' }
  ];

  return (
    <div id="projects-grid" className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
        Project Portfolio
      </h2>
      
      {/* Desktop filters */}
      <div className="hidden md:flex justify-center flex-wrap gap-4 mb-10">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      {/* Mobile filters - scrollable */}
      <div className="md:hidden overflow-x-auto pb-4 mb-6 -mx-6 px-6">
        <div className="flex space-x-2 min-w-max">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsFilter;