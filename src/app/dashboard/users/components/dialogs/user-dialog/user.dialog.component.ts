import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import User from '../../../../../_common/models/user.model';
import roles from '../../../../../_common/enums/roles';

interface dialogData {
  user: User,
  submitDialogHandler: Function
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user.dialog.component.html',
  styleUrls: ['./user.dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogData) {}

  ngOnInit() {}

  user = {...this.data.user};

  roles = roles;

  config = {
    title: this.user.id ? "Edit user" : "Create user",
    actions: {
      submit: this.user.id ? "Edit" : "Create",
      cancel: "Cancel"
    }
  };

  submit() {
    this.data.submitDialogHandler(this.user);
  }
}
