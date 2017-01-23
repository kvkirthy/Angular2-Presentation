import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input("appHighlighter") selectedColor: string;

  constructor(private elm: ElementRef) {
   }

   ngOnInit(){
      this.highlightHandler();     
   }

   highlightHandler(){     
     console.log(this.selectedColor);
     this.elm.nativeElement.style.backgroundColor = this.selectedColor || 'yellow';     
   }

}
