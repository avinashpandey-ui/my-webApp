import { Component, OnInit } from '@angular/core';
import { WELCOME } from './welcome.constant';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  welcomeCards = WELCOME;
  actualOptions = ['bihar', 'jharkhand', 'uttarPradesh', 'sikkim', 'bengal'];
  filteredOptions = [];
  searchBar = new FormGroup({
    stateName: new FormControl(''),
  });

  ngOnInit(): void {
    // this.filteredOptions = this.getstateNameControl().valueChanges.pipe((search)=>{
    //   return this.actualOptions.filter((option)=>{
    //     option.toLowerCase().includes(search.toLowercase())
    //   })
    // })
  }

  getstateNameControl():AbstractControl{
    return this.searchBar.get('stateName') as AbstractControl
  }
}
