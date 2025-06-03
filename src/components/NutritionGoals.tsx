
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target } from 'lucide-react';

const NutritionGoals = () => {
  const goals = [
    {
      name: 'Calorias',
      current: 1850,
      target: 2000,
      unit: 'kcal',
      color: 'bg-blue-500'
    },
    {
      name: 'Proteínas',
      current: 125,
      target: 120,
      unit: 'g',
      color: 'bg-green-500'
    },
    {
      name: 'Carboidratos',
      current: 210,
      target: 200,
      unit: 'g',
      color: 'bg-yellow-500'
    },
    {
      name: 'Gorduras',
      current: 70,
      target: 65,
      unit: 'g',
      color: 'bg-red-500'
    },
    {
      name: 'Água',
      current: 1.8,
      target: 2.5,
      unit: 'L',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Metas Diárias
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {goals.map((goal, index) => {
            const percentage = Math.min((goal.current / goal.target) * 100, 100);
            const isOverTarget = goal.current > goal.target;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{goal.name}</span>
                  <span className={`text-sm ${isOverTarget ? 'text-red-600' : 'text-muted-foreground'}`}>
                    {goal.current}{goal.unit} / {goal.target}{goal.unit}
                  </span>
                </div>
                <Progress 
                  value={percentage} 
                  className={`h-2 ${isOverTarget ? 'bg-red-100' : ''}`}
                />
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">
                    {percentage.toFixed(0)}% da meta
                  </span>
                  {isOverTarget && (
                    <span className="text-red-600 font-medium">
                      +{goal.current - goal.target}{goal.unit}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionGoals;
