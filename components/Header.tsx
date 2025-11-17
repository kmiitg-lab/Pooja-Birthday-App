
import React from 'react';

interface HeaderProps {
  view: 'list' | 'map';
  setView: (view: 'list' | 'map') => void;
}

const Header: React.FC<HeaderProps> = ({ view, setView }) => {
  const activeTabClasses = 'bg-blue-600 text-white';
  const inactiveTabClasses = 'bg-slate-700/50 text-slate-300 hover:bg-slate-700';

  return (
    <header className="text-center py-8 sm:py-12 bg-slate-900/50 border-b border-slate-800">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text mb-2">
        Pooja's Birthday Run
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto">
        Join Pooja for a scenic run and offer some company along the way. Sign up for a leg that works for you!
      </p>
      <div className="mt-4 text-slate-400">
        <span><strong>Start:</strong> 7:00 AM @ Porto's Pl</span>
        <span className="mx-2">|</span>
        <span><strong>End:</strong> ~11:00 AM @ Los Gatos Cafe</span>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => setView('list')}
            aria-pressed={view === 'list'}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${view === 'list' ? activeTabClasses : inactiveTabClasses}`}
          >
            List View
          </button>
          <button
            onClick={() => setView('map')}
            aria-pressed={view === 'map'}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${view === 'map' ? activeTabClasses : inactiveTabClasses}`}
          >
            Map View
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
