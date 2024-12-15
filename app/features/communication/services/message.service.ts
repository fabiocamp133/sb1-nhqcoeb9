import { Message } from '../../../shared/interfaces/message.interface';

export class MessageService {
  private messages: Message[] = [];

  addMessage(message: Message): void {
    this.messages.push(message);
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getMessagesByDate(date: Date): Message[] {
    return this.messages.filter(m => 
      m.timestamp.getDate() === date.getDate() &&
      m.timestamp.getMonth() === date.getMonth() &&
      m.timestamp.getFullYear() === date.getFullYear()
    );
  }
}