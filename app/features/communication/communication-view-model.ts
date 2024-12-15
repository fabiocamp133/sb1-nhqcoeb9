import { Observable } from '@nativescript/core';

export class CommunicationViewModel extends Observable {
  private _messages: string[] = [];

  constructor() {
    super();
  }

  addMessage(message: string) {
    this._messages.push(message);
    this.notifyPropertyChange('messages', this._messages);
  }

  get messages(): string[] {
    return this._messages;
  }
}