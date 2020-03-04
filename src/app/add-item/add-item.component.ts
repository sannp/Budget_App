import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'shared/models/budget-item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() { }

  ngOnInit() {
    // if item has a value
    if(this.item) {
      //this means that an existing item object was passed into this component
      this.isNewItem = false;
    }
    else {
      this.isNewItem = true;
      this.item = new BudgetItem('',null);
    }
  }

  onSubmit(form : NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
