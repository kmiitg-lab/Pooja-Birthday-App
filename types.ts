
export interface Participant {
  name: string;
  time: string;
}

export interface Stop {
  id: number;
  name: string;
  address: string;
  estimatedTime: string;
  segmentDistance: string;
  totalDistance: string;
  isEndpoint: boolean;
  participants: Participant[];
}