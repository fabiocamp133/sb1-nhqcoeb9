import { Observable } from '@nativescript/core';

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'audio';
  url: string;
}

export class ResourcesViewModel extends Observable {
  private _resources: Resource[] = [];

  constructor() {
    super();
    this.initializeResources();
  }

  private initializeResources() {
    this._resources = [
      {
        id: '1',
        title: 'Comunicação Efetiva no Relacionamento',
        type: 'article',
        url: '/resources/communication-guide'
      },
      {
        id: '2',
        title: 'Construindo Confiança',
        type: 'video',
        url: '/resources/trust-building'
      }
    ];
  }

  get resources(): Resource[] {
    return this._resources;
  }
}