import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public sections = [
    'Section 1',
    'Section 2',
    'Section 3',
    'Section 4',
    'Section 5',
    'Section 6',
    'Section 7',
    'Section 8',
    'Section 9',
    'Section 10',
    'Section 11',
    'Section 12',
    'Section 13',
    'Section 14',
    'Section 15',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
