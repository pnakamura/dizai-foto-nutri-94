
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Clock } from 'lucide-react';

const RecentMeals = () => {
  const meals = [
    {
      time: '08:00',
      name: 'Café da Manhã',
      description: 'Aveia com frutas e castanhas',
      calories: 320,
      status: 'completed'
    },
    {
      time: '12:30',
      name: 'Almoço',
      description: 'Frango grelhado com arroz integral',
      calories: 580,
      status: 'completed'
    },
    {
      time: '15:30',
      name: 'Lanche',
      description: 'Iogurte com granola',
      calories: 180,
      status: 'pending'
    },
    {
      time: '19:00',
      name: 'Jantar',
      description: 'Não registrado',
      calories: 0,
      status: 'pending'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Refeições de Hoje
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {meals.map((meal, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-lg border ${
                meal.status === 'completed' ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">{meal.time}</span>
                  <h4 className="font-medium">{meal.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{meal.description}</p>
                {meal.calories > 0 && (
                  <p className="text-xs text-green-600 font-medium">{meal.calories} kcal</p>
                )}
              </div>
              {meal.status === 'pending' && (
                <Button size="sm" variant="outline">
                  <Camera className="h-4 w-4 mr-1" />
                  Foto
                </Button>
              )}
              {meal.status === 'completed' && (
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentMeals;
