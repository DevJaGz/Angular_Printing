import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-print',
  templateUrl: './test-ng-print.component.html',
  styleUrls: ['./test-ng-print.component.scss']
})
export class TestNgPrintComponent implements OnInit {
  mytodos = [
    {
      item:'need to buy movie tickets',
      isCompleted:false
    },
    {
      item:'Gardening tomorrow 9:00AM',
      isCompleted:false
    },
    {
      item:'Car Washing',
      isCompleted:true
    },
    {
      item:'Buy a pen',
      isCompleted:false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
