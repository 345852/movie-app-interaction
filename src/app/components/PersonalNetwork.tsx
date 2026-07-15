import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface PersonalNetworkProps {
  onClose: () => void;
}

interface Person {
  id: number;
  name: string;
  avatar: string;
  x: number;
  y: number;
}

interface Connection {
  from: number;
  to: number;
  relationship: string;
}

export function PersonalNetwork({ onClose }: PersonalNetworkProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Center person
  const centerPerson = {
    id: 0,
    name: '张伟',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
    x: 50, // percentage
    y: 45,
  };

  // Surrounding people positioned in a circle pattern
  const people: Person[] = [
    {
      id: 1,
      name: '李明',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400',
      x: 50,
      y: 15,
    },
    {
      id: 2,
      name: '王芳',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400',
      x: 75,
      y: 28,
    },
    {
      id: 3,
      name: '赵敏',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400',
      x: 85,
      y: 50,
    },
    {
      id: 4,
      name: '王五',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
      x: 75,
      y: 70,
    },
    {
      id: 5,
      name: '王五',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
      x: 50,
      y: 80,
    },
    {
      id: 6,
      name: '王五',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400',
      x: 25,
      y: 70,
    },
    {
      id: 7,
      name: '王五',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400',
      x: 15,
      y: 50,
    },
  ];

  const connections: Connection[] = [
    { from: 0, to: 1, relationship: '同事' },
    { from: 0, to: 2, relationship: '朋友' },
    { from: 0, to: 3, relationship: '通讯录好友' },
    { from: 0, to: 4, relationship: '家人' },
    { from: 0, to: 5, relationship: '家人' },
    { from: 0, to: 6, relationship: '朋友' },
    { from: 0, to: 7, relationship: '同学' },
  ];

  const allPeople = [centerPerson, ...people];

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 pt-3 pb-3">
        <div className="flex items-center justify-between mb-3">
          <button onClick={onClose} className="p-1">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-medium">看个人脉</h1>
          <div className="w-6"></div>
        </div>
        
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索人名..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')}>
              <X className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      {/* Network Graph */}
      <div className="relative w-full h-full bg-gray-50">
        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map((connection, index) => {
            const fromPerson = allPeople.find(p => p.id === connection.from);
            const toPerson = allPeople.find(p => p.id === connection.to);
            
            if (!fromPerson || !toPerson) return null;

            const x1 = `${fromPerson.x}%`;
            const y1 = `${fromPerson.y}%`;
            const x2 = `${toPerson.x}%`;
            const y2 = `${toPerson.y}%`;

            // Calculate midpoint for label
            const midX = (fromPerson.x + toPerson.x) / 2;
            const midY = (fromPerson.y + toPerson.y) / 2;

            return (
              <g key={index}>
                {/* Connection line */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#000"
                  strokeWidth="1.5"
                />
                {/* Relationship label background */}
                <foreignObject
                  x={`${midX - 7}%`}
                  y={`${midY - 2}%`}
                  width="14%"
                  height="4%"
                  className="pointer-events-auto"
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="bg-red-300 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                      {connection.relationship}
                    </div>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>

        {/* People nodes */}
        {allPeople.map((person) => (
          <div
            key={person.id}
            className="absolute"
            style={{
              left: `${person.x}%`,
              top: `${person.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="flex flex-col items-center">
              <div
                className={`rounded-full overflow-hidden border-4 ${
                  person.id === 0 ? 'border-red-400 w-20 h-20' : 'border-gray-300 w-14 h-14'
                }`}
              >
                <ImageWithFallback
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`mt-1 text-center ${person.id === 0 ? 'font-medium' : 'text-sm'}`}>
                {person.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
