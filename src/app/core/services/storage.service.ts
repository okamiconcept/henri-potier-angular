import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable()
export class StorageService {
  private prefix = 'hpa-';

  constructor(@Inject(PLATFORM_ID) private platformId) {}

  public set(key: string, value: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.prefix + key, JSON.stringify(value));
    }
  }

  public get<T>(key: string): T {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(this.prefix + key)) as T;
    } else {
      return null;
    }
  }

  public unset(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.prefix + key);
    }
  }

  public clearAll() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }
}
