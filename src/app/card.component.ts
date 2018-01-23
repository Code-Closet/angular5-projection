import { Component, Input } from '@angular/core';


@Component({
    selector : 'card',
    templateUrl : './card.component.html'
})
export class CardComponent {

    @Input() header = 'this is header';
    @Input() footer = 'this is footer';
}