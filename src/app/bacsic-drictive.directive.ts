import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[changeBG]",
})
export class BacsicDrictiveDirective implements OnInit {
  constructor(private ele: ElementRef) {}
  ngOnInit() {
    this.ele.nativeElement.style.backgroundColor = "green";
  }
}
