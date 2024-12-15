export const DAILY_TIPS = [
  "Dedique 10 minutos hoje para uma conversa significativa com seu parceiro(a).",
  "Pratique a escuta ativa: ouça sem interromper.",
  "Demonstre gratidão: agradeça por algo específico que seu parceiro(a) fez.",
  "Planeje uma atividade surpresa para seu parceiro(a).",
  "Compartilhe um momento do seu dia com detalhes.",
];

export function getRandomTip(): string {
  const randomIndex = Math.floor(Math.random() * DAILY_TIPS.length);
  return DAILY_TIPS[randomIndex];
}