import { Component, QueryList, AfterContentInit, ContentChildren } from '@angular/core';
import { PanelComponent } from './panel.component';


@Component({
    selector: 'accordion',
    template: '<ng-content></ng-content>'
})
export class AccordionComponent implements AfterContentInit{

    @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

    ngAfterContentInit(){
        this.panels.toArray()[0].opened = true;
        
    }

    openPanel(panel: PanelComponent) {
        // close all panels
        this.panels.toArray().forEach(p => p.opened = false);
        // open the selected panel
        panel.opened = true;
      }
}