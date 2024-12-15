import { Observable } from '@nativescript/core';
import { getRandomTip } from './shared/constants/tips';
import { calculateProgress } from './shared/utils/progress';
import { DiagnosticViewModel } from './features/diagnostic/diagnostic-view-model';
import { TasksViewModel } from './features/tasks/tasks-view-model';
import { CommunicationViewModel } from './features/communication/communication-view-model';
import { ResourcesViewModel } from './features/resources/resources-view-model';

export class MainViewModel extends Observable {
  private _dailyTip: string;
  private _progressValue: number;
  private _progressText: string;
  
  private diagnosticVM: DiagnosticViewModel;
  private tasksVM: TasksViewModel;
  private communicationVM: CommunicationViewModel;
  private resourcesVM: ResourcesViewModel;

  constructor() {
    super();

    // Initialize feature view models
    this.diagnosticVM = new DiagnosticViewModel();
    this.tasksVM = new TasksViewModel();
    this.communicationVM = new CommunicationViewModel();
    this.resourcesVM = new ResourcesViewModel();

    // Initialize main screen data
    this._dailyTip = getRandomTip();
    const progress = calculateProgress(13, 20); // Example values
    this._progressValue = progress.value;
    this._progressText = progress.text;
    
    this.updateBindings();
  }

  get dailyTip(): string {
    return this._dailyTip;
  }

  get progressValue(): number {
    return this._progressValue;
  }

  get progressText(): string {
    return this._progressText;
  }

  onDiagnosticTap() {
    this.diagnosticVM.startDiagnostic();
  }

  onTasksTap() {
    console.log("Tasks section tapped");
    // TODO: Navigate to tasks page
  }

  onCommunicationTap() {
    console.log("Communication section tapped");
    // TODO: Navigate to communication page
  }

  onResourcesTap() {
    console.log("Resources section tapped");
    // TODO: Navigate to resources page
  }

  private updateBindings() {
    this.notifyPropertyChange('dailyTip', this._dailyTip);
    this.notifyPropertyChange('progressValue', this._progressValue);
    this.notifyPropertyChange('progressText', this._progressText);
  }
}