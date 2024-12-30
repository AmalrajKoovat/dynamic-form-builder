import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-config-attribute',
  templateUrl: './config-attribute.component.html',
  styleUrl: './config-attribute.component.scss'
})
export class ConfigAttributeComponent {
  attributeForm: FormGroup;
  attributeTypes = ['Date and Time', 'Text', 'Number', 'Dropdown', 'File'];
  attributesList = [
    { name: 'Packaging Level', description: 'Description 1', type: 'Text' },
    { name: 'Marketing Claims', description: 'Description 2', type: 'Dropdown' },
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfigAttributeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.attributeForm = this.fb.group({
      type: [data?.attribute?.type || '', Validators.required],
      parent: [data?.attribute?.parent || ''],
      hideLabel: [data?.attribute?.hideLabel || false],
      fileUpload: [data?.attribute?.fileUpload || false],
    });
  }

  save(): void {
    if (this.attributeForm.valid) {
      const updatedAttribute = { ...this.data.attribute, ...this.attributeForm.value };
      this.dialogRef.close(updatedAttribute); // Close dialog with updated data
    }
  }

  close(): void {
    this.dialogRef.close(); // Close dialog without changes
  }

}
