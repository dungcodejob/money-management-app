import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { PamIconsRegistryService } from '@core/services/icons-registry.service';

@Component({
  selector: 'pam-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  private _svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this._svgIcon) {
      this.element.nativeElement.removeChild(this._svgIcon);
    }
    const svgData = this.pamIconRegistryService.getIcon(iconName);
    if (svgData) {
      this._svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this._svgIcon);
    }

  }
  constructor(
    private element: ElementRef,
    private pamIconRegistryService: PamIconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) { }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }

}
