import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.sass']
})

export class UserItemComponent implements OnInit {
  // @Input() name: string
  @Input() name?: String

  constructor() {
  }

  ngOnInit(): void {
  }

}
