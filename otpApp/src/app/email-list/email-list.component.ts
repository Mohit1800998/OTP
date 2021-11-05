import { Component, OnInit } from '@angular/core';

import { Email } from '../model/email';
import { UserService } from '../service/user-service.service';
@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  email: Email[]=[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.email = data;
    });
  }

}
