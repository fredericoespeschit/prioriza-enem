import { Component } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { QuestionLevel } from 'src/app/models/question-level.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public isModalOpen:boolean = false;
  public questions:Question[] = [{statement: "Calcule a area de um quadrado de lado 2."}, {statement: "Calcule a area de um quadrado de lado 3.", level: QuestionLevel.EASY} ];

  public openModal(): void {
    this.isModalOpen = true;
  }

  public closeModal(): void {
    this.isModalOpen = false;
  }

  public addQuestionToList(question: Question): void {
    this.questions.push(question);
    this.isModalOpen = false;
  }

}
