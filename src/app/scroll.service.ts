import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private homeSectionSource = new BehaviorSubject<HTMLElement | null>(null);
  currentHomeSection = this.homeSectionSource.asObservable();

  private contactSectionSource = new BehaviorSubject<HTMLElement | null>(null);
  currentContactSection = this.contactSectionSource.asObservable();

  changeHomeSection(section: HTMLElement) {
    this.homeSectionSource.next(section);
  }

  changeContactSection(section: HTMLElement) {
    this.contactSectionSource.next(section);
  }
}