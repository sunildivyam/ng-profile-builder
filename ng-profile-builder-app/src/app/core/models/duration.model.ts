export class Duration {
  years: number;
  months: number;

  constructor(years?, months?) {
    this.years = years;
    this.months = months;
  }

  public toString(): string {
    let yPostFix = 'years';
    let mPostFix = 'months';

    if (this.years === 1) {
      yPostFix = 'year';
    }
    if (this.months === 1) {
      mPostFix = 'month';
    }

    return (this.years ? `${this.years} ${yPostFix} ` : '') + (this.months ? `${this.months} ${mPostFix}` : '');
  }

  public roundYear(): void {
    if (this.months >= 6 ) {
      this.years++;
      this.months = 0;
    }
  }
}
