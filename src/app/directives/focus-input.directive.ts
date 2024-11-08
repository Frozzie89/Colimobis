import { Directive, HostListener, Input } from '@angular/core';
import { IonInput } from '@ionic/angular/standalone'

@Directive({
    selector: '[focusInput]',
    standalone: true
})
export class FocusInputDirective {

    @Input('focusInput') input!: IonInput

    @HostListener('click')
    onClick() {
        if (this.input) {
            this.input.setFocus();
        }
    }
}
