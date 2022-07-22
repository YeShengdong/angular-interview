import { Component } from '@angular/core';
import { Option } from './components/multi-check.component';

const defaultValues: string[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  
  options: Option[] = [
    { label: 'aaa', value: '111' },
    { label: 'bbb', value: '222' },
    { label: 'ccc', value: '333' },
    { label: 'ddd', value: '444' },
    { label: 'eee', value: '555' },
    { label: 'Under Agreement', value: '666' },
    { label: 'ggg', value: '777' },
    { label: 'hhh', value: '888' },
    { label: 'iii', value: '999' },
  ];

  selectedValues:string[] = defaultValues;

  onSelectedOptionsChange(options: Option[]): void {
    this.selectedValues = options.map((it) => it.value);
  }
}
