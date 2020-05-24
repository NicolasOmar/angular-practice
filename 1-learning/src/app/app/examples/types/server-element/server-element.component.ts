import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  
  @Input() element;

  constructor() {
    console.warn('constructor called!')
  }

  ngOnChanges(changes: any) {
    console.warn('ngOnChanges called!', changes)
  }

  ngOnInit(): void {
    console.warn('ngOnInit called!');    
  }

  ngDoCheck() {
    console.warn('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.warn('ngAfterContentInit called!')
  }

  ngAfterContentChecked() {
    console.warn('ngAfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.warn('ngAfterViewInit called!')
  }

  ngAfterViewChecked() {
    console.warn('ngAfterViewChecked called!')
  }

  ngOnDestroy() {
    console.warn('ngOnDestroy called!')
  }
}
