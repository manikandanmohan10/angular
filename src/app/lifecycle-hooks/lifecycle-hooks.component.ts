import { ChangeDetectorRef, Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  template: `
    <h1>{{name}}</h1>
    <input value={{name}} type='text'>
  `,
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements
  OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked {
  @Input() name: any;

  public val: any;

  constructor(private cdRef: ChangeDetectorRef){}

  // It'll get trigger whenever input field got any changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`From ngOnChanges -> ${changes['name'].previousValue}`);
    this.val = changes['name'].previousValue
    // this.name = 666
  }

  // It'll get trigger when component got initialized
  ngOnInit(): void {
    console.log('From ngOnInit');
  }

  // It'll get trigger before component got destroyed
  ngOnDestroy(): void {
    console.log('From ngOnDestroy');
  }

  ngDoCheck(): void {
    console.log('From ngDoCheck');
    // this.name = this.val
    this.name = 7
    this.cdRef.detectChanges()
  }

  ngAfterContentInit(): void {
    console.log('From ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('From ngAfterContentChecked')
  }

  // It'll get trigger while view gets initialized
  ngAfterViewInit(): void {
    console.log('From ngAfterViewInit');
    // this.name = 666
  }

  // It'll get called after view got initialized
  ngAfterViewChecked(){
    console.log('From ngAfterViewChecked');
    this.name = 0
    this.cdRef.detectChanges()
  }
}
