import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { AppGlobalConstants } from '../common/global-constants';

export type Option = {
  label: string;
  value: string;
};

/**
 * Notice:
 * 1. There should be a special `Select All` option with checkbox to control all passing options
 * 2. If columns > 1, the options should be placed from top to bottom in each column
 *
 * @param {string} label - the label text of this component
 * @param {Option[]} options - options
 * @param {string[]} values - default checked option values
 * @param {number} columns - default value is 1
 * @param {Function} onChange - when checked options are changed,
 *                             they should be passed to outside
 */

@Component({
  selector: 'app-multi-check',
  templateUrl: './multi-check.component.html',
  styleUrls: ['./multi-check.component.less']
})
export class MultiCheckComponent implements AfterViewInit {


  @Input() options: Option[] = [];
  @Input() values: string[] = [];
  @Output() onChange = new EventEmitter<Option[]>();
  label: string = AppGlobalConstants.CHECKBOXESLABELNAME;
  columns: number = AppGlobalConstants.CHECKBOXESCOLUMNSBYDEFAULT;

  constructor() { }

  ngAfterViewInit(): void {
    this.options?.length > 0 ?
      this.options?.unshift({ label: AppGlobalConstants.SELECTALLTEXT, value: AppGlobalConstants.SELECTALLVALUE }) :
      '';
    const tempOptions = new Set(this.options); //to check &  remove any duplicate values that may come from app component
    this.options = [];
    this.options = Array.from(tempOptions);
  }
  handleCheckBoxStateChange(option: Option): void {
    this.modifyOnCheckBoxSelection(option);
    this.emitOnCheckBoxSelection();
  }
  modifyOnCheckBoxSelection(option: Option): void {
    // to check if 'Select All' is checked or un checked 
    if (option?.value === AppGlobalConstants.SELECTALLVALUE) {
      this.values = (this.values?.length === this.options?.length - 1) ? [] : this.options?.map(option => option.value);
      //to add newly checked checked box
    } else if (!this.values?.includes(option.value)) {
      this.values?.push(option.value);
      //to un check the previously checked check box
    } else {
      this.values = this.values?.filter(selectedValue => selectedValue !== option.value);
    }
  }
  emitOnCheckBoxSelection(): void {
    this.onChange.emit(this.options?.filter(option => option.value !== AppGlobalConstants.SELECTALLVALUE
      && this.values?.includes(option.value)));
  }
  calculateCheckedState(option: Option): boolean {
    return this.values?.includes(option.value);
  }
}
