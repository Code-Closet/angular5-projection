import { Input, Output, EventEmitter, Component } from '@angular/core';


@Component({
    selector : 'panel',
    templateUrl: './panel.component.html'
})
export class PanelComponent {
    @Input() opened = false;
    @Input() title: string;
    @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}