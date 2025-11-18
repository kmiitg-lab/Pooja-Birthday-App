import React, { useState } from 'react';
import Header from './components/Header';
import StopCard from './components/StopCard';
import MapView from './components/MapView';
import { RUN_STOPS } from './constants';
import type { Stop, Participant } from './types';

const App: React.FC = () => {
  const [stops, setStops] = useState<Stop[]>(RUN_STOPS);
  const [view, setView] = useState<'list' | 'map'>('list');

  const handleSignUp = (stopId: number, name: string, time: string) => {
    if (!name.trim()) return;

    const newParticipant: Participant = { name: name.trim(), time };

    setStops(prevStops =>
      prevStops.map(stop => {
        if (stop.id === stopId) {
          const updatedParticipants = [...stop.participants, newParticipant].sort((a, b) => {
            const timeA = new Date(`01/01/2024 ${a.time}`);
            const timeB = new Date(`01/01/2024 ${b.time}`);
            return timeA.getTime() - timeB.getTime();
          });
          return { ...stop, participants: updatedParticipants };
        }
        return stop;
      })
    );
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen antialiased">
      <Header view={view} setView={setView} />
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className={`mx-auto transition-all duration-300 ${view === 'list' ? 'max-w-3xl' : 'max-w-5xl'}`}>
          {view === 'list' ? (
            <div>
              {stops.map((stop, index) => (
                <StopCard
                  key={stop.id}
                  stop={stop}
                  onSignUp={handleSignUp}
                  isFirst={index === 0}
                  isLast={index === stops.length - 1}
                />
              ))}
            </div>
          ) : (
            <MapView stops={stops} />
          )}
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Happy Running!</p>
      </footer>
    </div>
  );
};

export default App;