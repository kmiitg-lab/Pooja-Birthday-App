import type { Stop } from './types';

export const RUN_STOPS: Stop[] = [
  {
    id: 1,
    name: "Run Start: Portos Place",
    address: "19181 Portos Pl, Saratoga, CA",
    estimatedTime: "7:00 AM",
    segmentDistance: "0 miles",
    totalDistance: "0 miles",
    isEndpoint: true,
    participants: [],
  },
  {
    id: 2,
    name: "Stop 1: Saratoga Dental Care",
    address: "19020 Cox Ave, Saratoga, CA",
    estimatedTime: "7:20 AM",
    segmentDistance: "1.1 miles",
    totalDistance: "1.1 miles",
    isEndpoint: false,
    participants: [],
  },
  {
    id: 3,
    name: "Stop 2: Safeway - Saratoga Sunnyvale Rd",
    address: "12876 Saratoga Sunnyvale Rd, Saratoga, CA",
    estimatedTime: "7:50 AM",
    segmentDistance: "1.6 miles",
    totalDistance: "2.7 miles",
    isEndpoint: false,
    participants: [],
  },
  {
    id: 4,
    name: "Stop 3: Saratoga Fire Station",
    address: "14380 Saratoga Ave, Saratoga, CA",
    estimatedTime: "8:20 AM",
    segmentDistance: "1.8 miles",
    totalDistance: "4.5 miles",
    isEndpoint: false,
    participants: [],
  },
  {
    id: 5,
    name: "Stop 4: West Valley College",
    address: "14000 Fruitvale Ave, Saratoga, CA",
    estimatedTime: "9:00 AM",
    segmentDistance: "1.8 miles",
    totalDistance: "6.3 miles",
    isEndpoint: false,
    participants: [],
  },
  {
    id: 6,
    name: "Stop 5: Quito Fire Station",
    address: "18870 Saratoga-Los Gatos Rd, Los Gatos, CA 95030",
    estimatedTime: "9:50 AM",
    segmentDistance: "2.1 miles",
    totalDistance: "8.4 miles",
    isEndpoint: false,
    participants: [],
  },
  {
    id: 7,
    name: "Stop 6: Billy Jones Wildcat Railroad",
    address: "Oak Meadow Park, Los Gatos, CA",
    estimatedTime: "10:45 AM",
    segmentDistance: "2.2 miles",
    totalDistance: "10.6 miles",
    isEndpoint: false,
    participants: [],
  },
  {
    id: 8,
    name: "Stop 7: Bravos Tacos",
    address: "16500 Los Gatos Blvd, Los Gatos, CA",
    estimatedTime: "11:05 AM",
    segmentDistance: "1.2 miles",
    totalDistance: "11.8 miles",
    isEndpoint: false,
    participants: [],
  },
  {
    id: 9,
    name: "Finish Line: Los Gatos Cafe",
    address: "340 N Santa Cruz Ave, Los Gatos, CA",
    estimatedTime: "11:45 AM",
    segmentDistance: "1.8 miles",
    totalDistance: "13.6 miles",
    isEndpoint: true,
    participants: [],
  },
];


export const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const RunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

export const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21h14M9 21a2 2 0 01-2-2v-1a2 2 0 012-2h6a2 2 0 012 2v1a2 2 0 01-2 2H9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 11.5c.277 0 .5-.223.5-.5s-.223-.5-.5-.5-.5.223-.5.5.223.5.5.5zm-11 0c.277 0 .5-.223.5-.5s-.223-.5-.5-.5-.5.223-.5.5.223.5.5.5zM12 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);