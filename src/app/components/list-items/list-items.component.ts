import { Component, Input, OnInit } from '@angular/core';

export type Item = {
  id: number;
  name: string;
}

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  // Setting the props for the component 
  // @Input type of prop it will receive 
  @Input() items: Array<Item>; // decorate the property with @Input() 
  constructor() {}

  ngOnInit(): void {}

}
