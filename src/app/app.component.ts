import { Component } from '@angular/core';
declare var document: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-form-builder';
  themes: any = {
    tealTheme: {
      '--primary-color': '#146678',
      '--secondary-color': '#EB706B',
      '--tertiary-color':'#285E67',
      '--button-bg-color': '#fff',
      '--button-hover-bg-color': '#EB706B',
      '--button-hover-color': '#fff',
      '--button-active-bg-color': '#00b0bb',
      '--button-active-color': '#fff',
      '--button-disabled-bg-color': '#e5e6e6',
      '--button-disabled-color': '#acaeaf',
      '--button-disabled-border-color': '#CDCDCD',
      '--button-focus-bg-color': '#EB706B',
      '--button-focus-border-color': '#EB706B',
      '--input-border-color': '#CDCDCD',
      '--input-focus': '#EB706B',
      '--th-bg-color': '#E5E8EB',
      '--tbody-bg-color': '#fff',
      '--tr-hover-color': '#F9F9F9',
      '--card-border-color': '#66CDF3',
      '--dropdown-bg-color': '#fff',
      '--dropdown-border-color': '#d0e8e8',
      '--dropdown-color': '#000',
      '--dropdown-contents-color': '#000',
      '--dropdown-contents-hover-color': '#fff',
      '--dropdown-contents-hover-bg-color': '#EB706B',
      '--blue-text': '#1B7692',
      '--grey-text': '#575757',
      '--light-grey-text': '#CFCFCF',
      '--text-color': '#000',
      '--selected-item': '#F0FFFF',
      '--form-builder-primary': 'rgb(250, 255, 255)',
      '--form-builder-secondary': '#E5E8EB',
      '--checkbox-background-color': '#0DB0BC',
      '--tr-selected': '#FDF1F1',
      '--sidebar-bg-color':'#35373D',
      '--sidebar-secondary-bg-color':'#626469',
      '--sidebar-item-hover':'#eb706b4d',
      '--required-color':'#EB706B',
      '--text-primary-color':'#2B424E',
      '--text-secondary-color': '#3e5566'

    }
  };

  ngOnInit(): void {
    this.setTheme('tealTheme'); // Set the default theme
  }

  setTheme(theme: any): void {
    if (typeof document !== 'undefined') {
      for (let item in this.themes?.[theme]) {
        document.querySelector('html').style.setProperty(item, this.themes?.[theme][item]);
      }
    }
  }
}
