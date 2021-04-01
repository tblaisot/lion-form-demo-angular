import {
  AfterViewInit,
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnDestroy,
  Renderer2
} from "@angular/core";

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const LION_CHOICEVALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LionWcChoiceValueAccessorDirective),
  multi: true
};

@Directive({
  selector:
    "lion-checkbox[formControlName],lion-checkbox[formControl],lion-checkbox[ngModel]," +
    "lion-radio[formControlName],lion-radio[formControl],lion-radio[ngModel]," +
    "lion-switch[formControlName],lion-switch[formControl],lion-switch[ngModel]," +
    "lion-option[formControlName],lion-option[formControl],lion-option[ngModel]",
  providers: [LION_CHOICEVALUE_ACCESSOR]
})
export class LionWcChoiceValueAccessorDirective
  implements ControlValueAccessor {
  @Input() name: string;

  /**
   * The registered callback function called when a change event occurs on the input element.
   * @nodoc
   */
  onChange = (_: any) => {};

  /**
   * The registered callback function called when a blur event occurs on the input element.
   * @nodoc
   */
  onTouched = () => {};

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, "modelValue", {
      ...this._elementRef.nativeElement.modelValue,
      checked: value
    });
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
    this._renderer.setProperty(
      this._elementRef.nativeElement,
      "disabled",
      isDisabled
    );
  }

  /** @internal */
  @HostListener("model-value-changed", ["$event"])
  _handleChange(event: any): void {
    this.onChange(event.target.modelValue.checked);
  }

  /** @internal */
  @HostListener("blur")
  _handleBlur(): void {
    this.onTouched();
  }
}
