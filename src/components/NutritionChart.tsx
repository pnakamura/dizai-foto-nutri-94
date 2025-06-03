
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const weeklyData = [
  { day: 'Seg', calories: 1850, protein: 120, carbs: 200, fat: 65 },
  { day: 'Ter', calories: 1920, protein: 115, carbs: 220, fat: 70 },
  { day: 'Qua', calories: 1780, protein: 125, carbs: 180, fat: 60 },
  { day: 'Qui', calories: 2100, protein: 140, carbs: 250, fat: 80 },
  { day: 'Sex', calories: 1950, protein: 130, carbs: 210, fat: 72 },
  { day: 'Sáb', calories: 2200, protein: 135, carbs: 280, fat: 85 },
  { day: 'Dom', calories: 1850, protein: 110, carbs: 200, fat: 68 }
];

const macroData = [
  { name: 'Proteínas', value: 125, target: 120, color: '#10b981' },
  { name: 'Carboidratos', value: 210, target: 200, color: '#3b82f6' },
  { name: 'Gorduras', value: 70, target: 65, color: '#f59e0b' }
];

const chartConfig = {
  calories: {
    label: "Calorias",
    color: "#10b981",
  },
  protein: {
    label: "Proteínas",
    color: "#3b82f6",
  },
  carbs: {
    label: "Carboidratos",
    color: "#f59e0b",
  },
  fat: {
    label: "Gorduras",
    color: "#ef4444",
  },
};

const NutritionChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Análise Nutricional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weekly">Semanal</TabsTrigger>
            <TabsTrigger value="macros">Macronutrientes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly">
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="calories" 
                    stroke="var(--color-calories)" 
                    strokeWidth={2}
                    dot={{ fill: "var(--color-calories)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          
          <TabsContent value="macros">
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={macroData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="#10b981" />
                  <Bar dataKey="target" fill="#e5e7eb" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default NutritionChart;
