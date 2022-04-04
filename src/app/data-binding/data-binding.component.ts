import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.training'
  angularCourse = true
  imageUrl = 'http://lorempixel.com.br/400/200'

  currentValue: string = ''
  savedValue: string = ''
  isMouseOver: boolean = false;

  name: string = 'abc'
  person: any = {
    name: 'a',
    age: 35
  }

  getValor() {
    return 1
  }

  getLikeCourse() {
    return true
  }

  clickedButton() {
    alert("Button clicked!")
  }

  onKeyUp(event: KeyboardEvent) {
    this.currentValue = (<HTMLInputElement> event.target).value
  }

  saveValue(value: any) {
    this.savedValue = value
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }


  constructor() { }

  ngOnInit(): void {
  }

}
