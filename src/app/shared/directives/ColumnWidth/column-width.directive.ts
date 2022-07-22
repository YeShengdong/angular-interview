import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AppGlobalConstants } from 'src/app/common/global-constants';

@Directive({
  selector: '[columnWidth]'
})
export class ColumnWidthDirective {

  @Input() noOfColumns: number = AppGlobalConstants.CHECKBOXESCOLUMNSBYDEFAULT; //By default the column size (displaying multiple checkboxes in a single column) is equal to 1 

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'column-count', this.noOfColumns);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'column-width', '100px');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'block');
  }

}
