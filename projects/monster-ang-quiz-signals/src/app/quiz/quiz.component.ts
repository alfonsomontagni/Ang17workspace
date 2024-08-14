import { Component, computed, inject, signal } from '@angular/core';
import { QuestionComponent } from './components/question/question.component';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  quizService = inject(QuizService);
  setFooo() {
    this.fooo = 'bau';
    this.quizService.setProva(this.fooo);
  }
  setFoooSign() {
    this.foo2.set('bau2') ;
    //this.quizService.setProva(this.fooo);
  }
  foo2 = signal('bau fo2signal');
  fooo = 'fooo';
  message_signal = computed(()=>{
    `Hello ${this.foo2}`
  })//`Hello ${this.fooo}`;
  message_01 = `Hello ${this.fooo}`;
  message_02 = `Hello ${this.quizService.getProva()}`;

  setFoSignal(){
    this.foo2.set('eccolo il signal')
  }
}
