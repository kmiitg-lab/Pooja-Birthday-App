import React, { useState } from 'react';
import { Stop } from '../types';
import { ClockIcon, PinIcon, RunIcon, TrophyIcon } from '../constants';

interface StopCardProps {
  stop: Stop;
  onSignUp: (stopId: number, name: string, time: string) => void;
  isFirst: boolean;
  isLast: boolean;
}

const StopCard: React.FC<StopCardProps> = ({ stop, onSignUp, isFirst, isLast }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      onSignUp(stop.id, name, currentTime);
      setName('');
    }
  };

  const isStart = isFirst;
  const isFinish = isLast;
  const buttonText = isFinish ? "I'll be there!" : "Join This Leg";

  return (
    <div className="relative pl-10 sm:pl-12 py-6">
      {/* Timeline visuals */}
      {!isFirst && <div className="absolute left-[23px] sm:left-[27px] top-0 w-0.5 h-6 bg-slate-700"></div>}
      <div className="absolute left-4 sm:left-5 top-6">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isStart || isFinish ? 'bg-emerald-500' : 'bg-blue-500'}`}>
           {isFinish ? <TrophyIcon /> : <div className="w-2 h-2 rounded-full bg-slate-900"></div>}
        </div>
      </div>
      {!isLast && <div className="absolute left-[23px] sm:left-[27px] top-12 w-0.5 h-full bg-slate-700"></div>}
      
      {/* Card content */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">{stop.name}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 mb-6">
          <div className="flex items-center">
            <ClockIcon />
            <span>Est. Arrival: <strong>{stop.estimatedTime}</strong></span>
          </div>
          <div className="flex items-center">
            <PinIcon />
            <span>{stop.address}</span>
          </div>
           {!isFirst && (
            <div className="flex items-center">
              <RunIcon />
              <span>Leg Distance: <strong>{stop.segmentDistance}</strong></span>
            </div>
          )}
          <div className="flex items-center">
            <RunIcon />
            <span>Total Distance: <strong>{stop.totalDistance}</strong></span>
          </div>
        </div>

        {isStart && (
          <div className="bg-slate-700/50 p-4 rounded-lg text-center text-slate-300">
            This is the starting point. The run begins here!
          </div>
        )}
        
        {isFinish && (
          <div className="bg-slate-700/50 p-4 rounded-lg text-center text-slate-300">
            <p className="font-semibold text-emerald-400">Congratulations!</p>
            <p>This is the finish line. See you for celebrations!</p>
          </div>
        )}

        {/* Form for intermediate and finish stops */}
        {!isStart && (
          <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 mb-4 ${isFinish ? 'mt-4' : ''}`}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="flex-grow bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
              disabled={!name.trim()}
            >
              {buttonText}
            </button>
          </form>
        )}

        {/* Participant list for intermediate and finish stops */}
        {!isStart && (
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Company Crew:</h3>
            {stop.participants.length > 0 ? (
              <ul className="space-y-2">
                {stop.participants.map((p, index) => (
                  <li key={index} className="bg-slate-700/50 rounded-md px-4 py-2 text-slate-300 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">{p.name.charAt(0).toUpperCase()}</span>
                      {p.name}
                    </div>
                    <span className="text-sm text-slate-400 font-mono bg-slate-800 px-2 py-1 rounded">{p.time}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-400 italic">
                {isFinish ? 'Be the first to join the celebration!' : 'Be the first to join this segment!'}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StopCard;