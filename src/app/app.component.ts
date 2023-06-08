import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './cars'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  prefix = 'I\'m '
  name = 'Roohan'
  sentence() {
    return this.prefix + this.name
  }

  colors: string[] = ['red', 'blue', 'green', 'purple'];
  fruits: string[] = ['mango', 'apple', 'pear', 'banana'];

  // subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  // honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  // bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };

  cars: Car[];
  make: string = '';
  model: string = '';
  miles: number = 0;
  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars()
  }
  addCar() {
    const newCar: Car = { make: this.make.charAt(0).toUpperCase() + this.make.substring(1), model: this.model, miles: this.miles };
    // const newCar: Car = { make: "Tesla", model: "X", miles: 100 };
    this.transportationService.addCar(newCar);
  }

  saySomething() {
    alert('good day.');
  }

  counter = 0;
  increment() {
    this.counter++;
  }

  phrase = "It's going";
  update() {
    this.phrase += " ..and going";
  }

  username: string = '';

}
