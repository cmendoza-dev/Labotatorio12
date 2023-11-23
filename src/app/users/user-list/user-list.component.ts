import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'Carlos Mendoza' },
    { id: 2, name: 'Manuel Guanilo' },
    { id: 3, name: 'Juan Sisniegas' }
  ];

  selectedUser: {id: number, name: string }| undefined;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(user: {id: number, name: string}): void {
    this.selectedUser = user;
  }
}