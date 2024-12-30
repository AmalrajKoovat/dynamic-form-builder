import { Component } from '@angular/core';
import { templateJSON } from '../../../assets/template';

@Component({
  selector: 'app-forms-main',
  templateUrl: './forms-main.component.html',
  styleUrl: './forms-main.component.scss'
})
export class FormsMainComponent {
  formTemplate : any;
  ngOnInit() {
    // Initialize formTemplate with the imported JSON
    this.formTemplate = templateJSON;
  }
}
