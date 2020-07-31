import { Component, Input } from '@angular/core';

@Component({
    selector:'property-thumbnail',
    templateUrl:'./property-thumbnail.component.html',
    styles: [`
    .pad-left { margin-left: 10px; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 210px; padding-left: 10px; background-color: #343a40; margin-bottom:10px; }
    .well div { color: #bbb; }
    .yellow {color:#FFFF00 !important}
    `]    
})
export class PropertyThumbnailComponent
{
    @Input() inpProp;
}