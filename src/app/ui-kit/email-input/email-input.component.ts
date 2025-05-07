import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    }
  ]
})
export class EmailInputComponent implements ControlValueAccessor, Validator {
  @Input() placeholder: string = 'Enter your email';
  @Input() required: boolean = true;
  @Input() inputClass: string = '';

  value: string = '';
  touched = false;
  disabled = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required && !this.value) {
      return { required: true };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailRegex.test(this.value)) {
      return { email: true };
    }

    return null;
  }

  onInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.value = input;
    this.onChange(input);
  }

  onBlur() {
    this.onTouched();
  }
}