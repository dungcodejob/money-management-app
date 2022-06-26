import { Injectable } from '@angular/core';
import { PamIcon } from '@share/models/pam-icons';

@Injectable({
  providedIn: 'root'
})
export class PamIconsRegistryService {

  private _registry = new Map<string, string>();

  public registerIcons(icon: PamIcon[]) {
    icon.forEach((icon: PamIcon) => this._registry.set(icon.name, icon.data));
  }
  public getIcon(iconName: string): string | undefined {
    if (!this._registry.has(iconName)) {
      console.warn(`we could not find the icon with name ${iconName}, did you add it to icon registry?`)
    }
    return this._registry.get(iconName);
  }
}
