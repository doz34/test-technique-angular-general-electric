import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Dog[] = []

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => this.dogs = dogs);
  }

  updateDog(dog: Dog): void {
    this.dogService.updateDog(dog).subscribe(() => console.log('Chien modifié !'));
  }

  deleteDog(dog: Dog): void {
    if (dog.id !== undefined)
    this.dogService.deleteDog(dog.id).subscribe(() => {
      this.getDogs();
      console.log('Chien supprimé !');
    });
    else {
      console.error('Impossible de supprimer le chien sans ID')
    }
  }

  onDogAdded(): void {
    this.getDogs();
  }

}
