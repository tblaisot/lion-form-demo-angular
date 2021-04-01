import {
  AfterViewInit,
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const LION_MODELVALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LionWcModelValueAccessorDirective),
  multi: true,
};

@Directive({
  selector: 'lion-input[formControlName], lion-input[formControl], lion-input[ngModel],' +
    'lion-textarea[formControlName], lion-textarea[formControl], lion-textarea[ngModel],' +
    'lion-input-amount[formControlName], lion-input-amount[formControl], lion-input-amount[ngModel],' +
    'lion-input-date[formControlName], lion-input-date[formControl], lion-input-date[ngModel],' +
    'lion-input-datepicker[formControlName], lion-input-datepicker[formControl], lion-input-datepicker[ngModel],' +
    'lion-input-email[formControlName], lion-input-email[formControl], lion-input-email[ngModel],' +
    'lion-input-iban[formControlName], lion-input-iban[formControl], lion-input-iban[ngModel],' +
    'lion-input-range[formControlName], lion-input-range[formControl], lion-input-range[ngModel],' +
    'lion-input-stepper[formControlName], lion-input-stepper[formControl], lion-input-stepper[ngModel],' +
    'lion-checkbox-group[formControlName], lion-checkbox-group[formControl], lion-checkbox-group[ngModel],' +
    'lion-radio-group[formControlName], lion-radio-group[formControl], lion-radio-group[ngModel],' +
    'lion-fieldset[formControlName], lion-fieldset[formControl], lion-fieldset[ngModel],' +
    'lion-combobox[formControlName], lion-combobox[formControl], lion-combobox[ngModel],' +
    'lion-listbox[formControlName], lion-listbox[formControl], lion-listbox[ngModel],' +
    'lion-select-rich[formControlName], lion-select-rich[formControl], lion-select-rich[ngModel]',
  providers: [LION_MODELVALUE_ACCESSOR],
})
export class LionWcModelValueAccessorDirective
  implements ControlValueAccessor {
  @Input() name: string;

  /**
   * The registered callback function called when an input event occurs on the input element.
   * @nodoc
   */
  onChange = (_: any) => {
  };

  /**
   * The registered callback function called when a blur event occurs on the input element.
   * @nodoc
   */
  onTouched = () => {
  };

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
  ) {
  }

  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'modelValue', value);
  }

  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Sets the "disabled" property on the input element.
   * @nodoc
   */
  setDisabledState(isDisabled: boolean): void {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  /** @internal */
  @HostListener('model-value-changed', ['$event'])
  _handleChange(event: any): void {
      this.onChange(event.target.modelValue);
  }

  /** @internal */
  @HostListener('blur')
  _handleBlur(): void {
    this.onTouched();
  }
}
