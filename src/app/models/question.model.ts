import { QuestionLevel } from "./question-level.enum";

export interface Question {
    id?:number;
    statement?:string;
    course?:string;
    topic?:string;
    level?: QuestionLevel;
    choices?: string[];
}