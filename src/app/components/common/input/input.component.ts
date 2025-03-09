import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [/* No additional imports needed for basic input */],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label: string = 'Label'; // Default label, can be overridden by parent
  @Input() value: string = ''; // Input value, can be two-way bound
  @Input() type: string = 'text'; // Input type (e.g., text, password, email)
  @Output() valueChange = new EventEmitter<string>(); // Emit changes to parent

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue; // Update local value
    this.valueChange.emit(inputValue); // Emit change to parent
  }
}