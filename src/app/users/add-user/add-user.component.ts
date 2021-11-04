import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.initUserForm()
  }

  initUserForm() {
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email,Validators.minLength(5)]),
      dateBirth: this.formBuilder.control("", [Validators.required]),
      description: this.formBuilder.control("", [Validators.required, Validators.minLength(15)]),
      address: this.formBuilder.group({
        street: this.formBuilder.control("", Validators.required),
        city: this.formBuilder.control("", Validators.required),
        state: this.formBuilder.control("", Validators.required),
        zip: this.formBuilder.control("", Validators.required),
      }),
      aliases: this.formBuilder.array([]),
    })
  }

  getAliases(): FormArray {
    return this.userForm.get("aliases") as FormArray
  }

  addAliases(): void {
    this.getAliases().push(this.formBuilder.control("", Validators.required))
  }

  onSubmit(): void {
    const dataUser = this.userForm.value
    const address = new Address(dataUser.address.street, dataUser.address.city, dataUser.address.state, dataUser.address.zip)
    const alias = dataUser.aliases ? dataUser.aliases : []
    const newUser = new User(
                          dataUser.firstname,
                          dataUser.lastname,
                          dataUser.email,
                          address,
                          dataUser.description,
                          dataUser.dateBirth,
                          alias
                          )
    this.usersService.addUser(newUser)
    console.log(newUser);

    this.router.navigate(["users"])
  }
}
