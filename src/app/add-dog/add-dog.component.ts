import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
})
export class AddDogComponent implements OnInit {
  dog: Dog = { name: '', img: '' };
  @Output() dogAdded = new EventEmitter();

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
  }

  addDog(): void {
    this.dogService.addDog(this.dog as Dog).subscribe(() => {
      console.log('Chien ajouté !');
      this.dog = { name: '', img: '' };
      this.dogAdded.emit();
    });
  }
}
