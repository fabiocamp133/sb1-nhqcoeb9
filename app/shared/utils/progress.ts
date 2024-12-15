export interface ProgressData {
  value: number;
  text: string;
}

export function calculateProgress(completedTasks: number, totalTasks: number): ProgressData {
  const value = (completedTasks / totalTasks) * 100;
  const text = `Você completou ${Math.round(value)}% das atividades desta semana!`;
  
  return {
    value,
    text
  };
}