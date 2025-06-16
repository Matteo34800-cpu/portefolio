import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorySubject = new BehaviorSubject<'info' | 'escalade'>('info');
  category$ = this.categorySubject.asObservable();

  setCategory(category: 'info' | 'escalade') {
    this.categorySubject.next(category);
  }
}
