import { Component } from '@angular/core';
import { InputComponent } from '../common/input/input.component';
import { RouterOutlet } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'; // Import the service
import { MatDialogModule } from '@angular/material/dialog'; // Import the module
import { QuestionModalComponent } from '../question-modal/question-modal.component';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel  } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-survey-information',
  standalone: true,
  imports: [
    InputComponent,
    RouterOutlet,
    QuillModule,
    FormsModule,
    MatDialogModule, // Replace MatDialog with MatDialogModule
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatIcon,
    HeaderComponent
  ],
  templateUrl: './survey-information.component.html',
  styleUrl: './survey-information.component.css',
})
export class SurveyInformationComponent {
  surveyNameEn: string = 'TEST';
  surveyNameAr: string = 'sdfsdf';
  surveyType: string = 'General';
  startDate: string = '2025-03-02T00:00';
  endDate: string = '2025-03-13T00:00';
  placeholder: string = '';
  richTextContent: string = '';

  constructor(public dialog: MatDialog) {} // Inject MatDialog

  openQuestionModal() {
    const dialogRef = this.dialog.open(QuestionModalComponent, {
      width: '600px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Modal closed with:', result);
        this.richTextContent = result.questionText || this.richTextContent;
      }
    });
  }

  onInputChange(field: string, value: string) {
    switch (field) {
      case 'surveyNameEn':
        this.surveyNameEn = value;
        break;
      case 'surveyNameAr':
        this.surveyNameAr = value;
        break;
      case 'surveyType':
        this.surveyType = value;
        break;
      case 'startDate':
        this.startDate = value;
        break;
      case 'endDate':
        this.endDate = value;
        break;
      case 'placeholder':
        this.placeholder = value;
        break;
    }
    console.log(`Updated ${field}:`, value);
  }
}