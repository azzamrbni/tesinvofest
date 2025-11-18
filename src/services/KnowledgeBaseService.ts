import { WEBSITE_DATABASE, FEW_SHOT_EXAMPLES, SYSTEM_PROMPT } from '../utils/knowledgeBase';

class KnowledgeBaseService {
  private static instance: KnowledgeBaseService;
  private database: string;
  private examples: string;
  private systemPrompt: string;

  private constructor() {
    this.database = WEBSITE_DATABASE;
    this.examples = FEW_SHOT_EXAMPLES;
    this.systemPrompt = SYSTEM_PROMPT;
  }

  public static getInstance(): KnowledgeBaseService {
    if (!KnowledgeBaseService.instance) {
      KnowledgeBaseService.instance = new KnowledgeBaseService();
    }
    return KnowledgeBaseService.instance;
  }

  public getDatabase(): string {
    return this.database;
  }

  public getExamples(): string {
    return this.examples;
  }

  public getSystemPrompt(): string {
    return this.systemPrompt;
  }

  public generatePrompt(userMessage: string, conversationHistory?: string): string {
    const historyContext = conversationHistory 
      ? `\n=== RIWAYAT PERCAKAPAN ===\n${conversationHistory}\n\n` 
      : '';
    
    return `${this.systemPrompt}${historyContext}=== PERTANYAAN USER ===\n${userMessage}\n\nJawab dengan detail berdasarkan database lengkap di atas:`;
  }

  public searchKeyword(keyword: string): string[] {
    const lines = this.database.split('\n');
    const results: string[] = [];
    const lowerKeyword = keyword.toLowerCase();

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes(lowerKeyword)) {
        const context = lines.slice(Math.max(0, i - 2), Math.min(lines.length, i + 3));
        results.push(context.join('\n'));
      }
    }

    return results;
  }

  public getSection(sectionName: string): string {
    const regex = new RegExp(`## \\d+\\. ${sectionName}([\\s\\S]*?)(?=## \\d+\\.|$)`, 'i');
    const match = this.database.match(regex);
    return match ? match[0] : '';
  }
}

export default KnowledgeBaseService;
