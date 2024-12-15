import { Observable } from '@nativescript/core';

export class DiagnosticViewModel extends Observable {
  constructor() {
    super();
  }

  startDiagnostic() {
    // TODO: Implement diagnostic questionnaire
    console.log("Starting diagnostic questionnaire");
  }
}