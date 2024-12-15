interface DiagnosticQuestion {
  id: string;
  question: string;
  options: string[];
}

interface DiagnosticResult {
  score: number;
  recommendations: string[];
}

export class DiagnosticService {
  private questions: DiagnosticQuestion[] = [];
  private results: DiagnosticResult[] = [];

  getQuestions(): DiagnosticQuestion[] {
    return this.questions;
  }

  submitAnswers(answers: Record<string, number>): DiagnosticResult {
    // Calculate score based on answers
    const score = Object.values(answers).reduce((sum, value) => sum + value, 0);
    
    // Generate recommendations based on score
    const recommendations = this.generateRecommendations(score);
    
    const result = { score, recommendations };
    this.results.push(result);
    
    return result;
  }

  private generateRecommendations(score: number): string[] {
    // Simple recommendation logic based on score
    if (score > 80) {
      return [
        "Continue fortalecendo sua comunicação",
        "Mantenha os momentos de qualidade juntos"
      ];
    } else if (score > 60) {
      return [
        "Dedique mais tempo para conversas significativas",
        "Pratique a escuta ativa diariamente"
      ];
    } else {
      return [
        "Considere buscar ajuda profissional",
        "Estabeleça momentos regulares para diálogo"
      ];
    }
  }
}