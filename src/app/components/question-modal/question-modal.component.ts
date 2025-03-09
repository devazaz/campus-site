import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputComponent } from '../common/input/input.component';

@Component({
  selector: 'app-question-modal',
  standalone: true,
  imports: [
    FormsModule,
    QuillModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    InputComponent,
  ],
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css'],
})
export class QuestionModalComponent {
  richTextContent: string = '';
  choiceText: string = '';
  isRequired: boolean = false;
  placeholder: string = '';


  constructor(
    public dialogRef: MatDialogRef<QuestionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onAdd() {
    const questionData = {
      questionText: this.richTextContent,
      choiceText: this.choiceText,
      isRequired: this.isRequired,
    };
    this.dialogRef.close(questionData); // Close modal and return data
  }

  onClose() {
    this.dialogRef.close(); // Close modal without data
  }

  onInputChange(field: string, value: string) {
    switch (field) {
      case 'placeholder':
        this.placeholder = value;
        break;
    }
    console.log(`Updated ${field}:`, value);
  }
}
