import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output()
  public onClose: EventEmitter<any> = new EventEmitter();

  @Output()
  public onSave: EventEmitter<Question> = new EventEmitter();

  public question: Question = {};

  public closeModal():void {
    this.onClose.emit();
  }

  public saveQuestion(): void {
    this.onSave.emit(this.question);
  }

}
