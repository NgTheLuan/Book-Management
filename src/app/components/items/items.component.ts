import { Item } from './../../models/item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr'; //https://www.npmjs.com/package/ngx-toastr

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService, public toast: ToastrService) {}

  ngOnInit(): void {
    // console.log('ngOninit ran'); Test Bug
    this.itemService.getItems().subscribe((items) => {
      // console.log(items); Test debug
      this.items = items;
    });
  }

  deleteItem(event, item: Item) {
    if (confirm('Are You Sure To Delete This Item ?')) {
      this.itemService.deleteItem(item);
      this.toast.warning('Delete Success !', 'Notification');
    }
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.editState = false;
    this.toast.success('Update Success !', 'Notification');
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  getColor(Color) {
    switch (Color) {
      case 'enough':
        return 'green';
      case 'out':
        return 'red';
      case 'wait':
        return 'yellow';
    }
  }
}
