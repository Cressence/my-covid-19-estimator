import { convertDaysBy3, convertWeeksByDays, convertMonthsByDays } from './functions';

const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: (data.reportedCases * 10),
    get infectionsByRequestedTime() {
      let result;
      if (data.periodType === 'days') {
        result = this.currentlyInfected * (2 ** convertDaysBy3(data.timeToElapse));
      } if (data.periodType === 'weeks') {
        result = this.currentlyInfected * (2 ** convertWeeksByDays(data.timeToElapse));
      } if (data.periodType === 'months') {
        result = this.currentlyInfected * (2 ** convertMonthsByDays(data.timeToElapse));
      }
      return result;
    }
  },
  severeImpact: {
    currentlyInfected: (data.reportedCases * 50),
    get infectionsByRequestedTime() {
      return this.currentlyInfected * 1024;
    }
  }
});

export default covid19ImpactEstimator;
