import { Injectable } from '@angular/core';
import { Duration, Employer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileViewService {

  constructor() { }

  private dateDiff(fromDate, toDate): Duration {
    if (!toDate) {
      toDate = (new Date()).toString();
    }
    const fDate = new Date(fromDate);
    const tDate = new Date(toDate);
    const fYears = fDate.getFullYear();
    const fMonths = fDate.getMonth();
    const fDays = fDate.getDate();

    let tYears = tDate.getFullYear();
    let tMonths = tDate.getMonth();
    let tDays = tDate.getDate();

    if (tDays < fDays) {
      tDays += 30;
      tMonths--;
    }

    if (tMonths < fMonths) {
      tMonths += 12;
      tYears--;
    }
    let days = tDays - fDays;
    let months = tMonths - fMonths;
    let years = tYears - fYears;

    if (days >= 15) {
      months++;
    }

    days = 0;

    if (months >= 12) {
      years++;
      months = 0;
    }

    return new Duration(years, months);
  }

  public getDuration(fromDate, toDate): Duration {
    return this.dateDiff(fromDate, toDate);
  }

  public getPresentEmployer(employers: Array<Employer>): Employer {
    if (!employers || !employers.length) {
      return new Employer();
    }
    return employers.find(emp => !emp.to) || new Employer();
  }
}
