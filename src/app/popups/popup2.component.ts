




//dialog__close-btn 



import {Component, EventEmitter, Input, Output} from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'popup2',
  styles :  [
      `.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    }

    .dialog {
    z-index: 1000;
    position: fixed;
    right: 0;
    left: 0;
    top: 20px;
    margin-right: auto;
    margin-left: auto;
    min-height: 200px;
    width: 90%;
    max-width: 520px;
    background-color: #fff;
    padding: 12px;
    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);
    }

    @media (min-width: 768px) {
    .dialog {
        top: 40px;
    }
    }

    .dialog__close-btn {
    border: 0;
    background: none;
    color: #2d2d2d ;
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 1.2em;
    }`
],
    template: `
    <div *ngIf="visible" class="dialog">
        <div class="modal-header">
            <button type="button" *ngIf="closable" (click)="close()" aria-label="Close" class="close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
            <p>האם אתה בטוח שברצונך לצאת?</p>
        </div>
        <div class="modal-footer">
            <ng-content></ng-content>
        </div>   
    </div>
    <div *ngIf="visible" class="overlay" (click)="close()"></div>      
    `,
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