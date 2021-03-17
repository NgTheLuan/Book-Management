import { Item } from 'src/app/models/Item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  item: Item = {
    Trademark: '',
    Name: '',
    Type: '',
    Material: '',
    Size: '',
    Price: '',
    Status: '',
  };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.item.Trademark != '' &&
      this.item.Name != '' &&
      this.item.Type != '' &&
      this.item.Material != '' &&
      this.item.Size != '' &&
      this.item.Price != '' &&
      this.item.Status != ''
    ) {
      this.itemService.addItem(this.item);
      this.item.Trademark = '';
      this.item.Name = '';
      this.item.Type = '';
      this.item.Material = '';
      this.item.Size = '';
      this.item.Price = '';
      this.item.Status = '';
    }
  }
}
