




//dialog__close-btn 



import {Component, EventEmitter, Input, Output} from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'popup2',
  styleUrls :  ['popup2.component.scss'],
    templateUrl:'popup2.component.html',
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({ transform: 'scale3d(.3, .3, .3)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
            ])
        ])
    ]
})
export class Popup2Component {
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

   constructor() {
        this.visible=false;
    }

   ngOnInit() { }

   close() {

       this.visible = false;
        this.visibleChange.emit(this.visible);
    }

}