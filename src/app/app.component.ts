import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from './services/app.service';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  private _number: number;
  private _addNumber: number;
  private readonly _submit$: EventEmitter<number>;
  private readonly _form: FormGroup;

  constructor(private _appService: AppService) {
    this._submit$ = new EventEmitter<number>();
    this._form = this._buildForm();
  }

  get number(): number {
    return this._number;
  }

  set number(num: number) {
    this._number = num;
  }

  get addNumber(): number {
    return this._addNumber;
  }

  @Input()
  set addNumber(num: number) {
    this._addNumber = num;
  }

  /**
   * Returns private property _form
   */
  get form(): FormGroup {
    return this._form;
  }

  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<number> {
    return this._submit$;
  }

  ngOnInit() {
    this._appService.get().subscribe((num: number) => this._number = num);
    console.log('aaaaa');
    console.log('aaaaa' + this._number);
  }

  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
      this._addNumber = record.model.currentValue;
    } else {
      this._addNumber = 0;
    }
  }

  submit(addNumber: number) {
    this._submit$.emit(addNumber);
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      addNumber: new FormControl()
    });
  }

}
