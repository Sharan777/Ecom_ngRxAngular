import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectCount } from '../state/counter/counter.selector';
import { decreament, increament, reset } from '../state/counter/counter.action';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$ : Observable<number>;

  constructor(private store:Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }

  increament() {
    this.store.dispatch(increament());
  }

  decreament() {
    this.store.dispatch(decreament());

  }

  reset() {
    this.store.dispatch(reset());
  }
}
