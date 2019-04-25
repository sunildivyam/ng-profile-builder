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

  private addDuration(durationSrc: Duration, durationDest: Duration): Duration {
    const addedDuration = new Duration(0, 0);
    addedDuration.years = durationSrc.years + durationDest.years;
    addedDuration.months = durationSrc.months + durationDest.months;
    if (addedDuration.months >= 12) {
      addedDuration.years += Math.floor(addedDuration.months / 12);
      addedDuration.months += (addedDuration.months % 12);
    }
    return addedDuration;
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

  public getRelevantExperience(employers: Array<Employer>): Duration {
    if (!employers || !employers.length) {
      return new Duration(0, 0);
    }
    let relevantDuration = new Duration(0, 0);
    employers.map((employer) => {
      if (employer.isRelevant === true) {
        relevantDuration = this.addDuration(relevantDuration, this.dateDiff(employer.from, employer.to));
      }
    });
    return relevantDuration;
  }

  public getTotalExperience(employers: Array<Employer>): Duration {
    if (!employers || !employers.length) {
      return new Duration(0, 0);
    }
    let totalDuration = new Duration(0, 0);
    employers.map((employer) => {      
      totalDuration = this.addDuration(totalDuration, this.dateDiff(employer.from, employer.to));
    });
    return totalDuration;
  }
}
