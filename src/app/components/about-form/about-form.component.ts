import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfigAttributeComponent } from '../attribute/config-attribute/config-attribute.component';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrl: './about-form.component.scss'
})
export class AboutFormComponent {
  formCreate : FormGroup | any = this.formBuilder.group({
    nameEn: ['', Validators.required],
    nameFr: ['', Validators.required],
    gdti: ['', Validators.required],
    descriptionEn: ['', Validators.required],
    descriptionFr: ['', Validators.required],
  });;

  hoveredRow: string | null = null;

  additionalInformation = [
    {
      title: 'User Stories (US)',
      description: 'Sprint planning, backlog grooming, and prioritization',
    },
    {
      title: 'User Acceptance Criteria (AC)',
      description: 'Test cases, validation, and sign-off',
    },
    {
      title: 'Technical Specifications (TS)',
      description: 'Architecture design, system components, and integration',
    },
    {
      title: 'Project Timeline (PT)',
      description: 'Milestones, deadlines, and dependencies',
    },
  ];

  attributesList = [
    {
      name: 'Packaging Effective Date',
      description: 'Lorem ipsum dolor sit amet consectetur. Ornare posuere turpis met',
      children: [
        {
          name: 'Packaging Level',
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          children: [
            {
              name: 'Packaging Component Name',
              description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
            }
          ]
        }
      ],
      isExpanded: false
    },
    {
      name: 'Marketing Claims',
      description: 'Lorem ipsum dolor sit amet consectetur. Ornare posuere turpis met',
      isExpanded: false
    }
  ];

  isExpanded: boolean = false;
  isAttributesListExpanded : boolean = false;

  toggleTable() {
    this.isExpanded = !this.isExpanded;
  }

  toggleAttributesList () {
    this.isAttributesListExpanded = !this.isAttributesListExpanded;
  }

  addNewInformation() {
    // Add logic to open a modal or add a new row
    console.log('Add New Information button clicked');
  }

  removeAttribute(uniqueId: string): void {
    console.log('Remove attribute with ID:', uniqueId);
    // Implement removal logic
  }

  configureAttribute(attribute: any): void {
    console.log('Configure attribute:', attribute);
    // Implement configuration logic
    const dialogRef = this.dialog.open(ConfigAttributeComponent, {
      width: '800px',
      data: { attribute, attributesList: this.attributesList },
    });

    dialogRef.afterClosed().subscribe((updatedAttribute) => {
      if (updatedAttribute) {
        const index = this.attributesList.findIndex((attr) => attr.name === updatedAttribute.name);
        if (index > -1) {
          this.attributesList[index] = updatedAttribute;
        }
      }
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      nameEn: ['', Validators.required],
      nameFr: ['', Validators.required],
      gdti: ['', Validators.required],
      descriptionEn: ['', Validators.required],
      descriptionFr: ['', Validators.required],
    });
  }
}
