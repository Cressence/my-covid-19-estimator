import {
  convertDaysBy3, convertWeeksByDays, convertMonthsByDays, weeksToDays, monthsToDays
} from './functions';

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
    },
    get severeCasesByRequestedTime() {
      return this.infectionsByRequestedTime * 0.15;
    },
    get hospitalBedsByRequestedTime() {
      const availableBeds = data.totalHospitalBeds * 0.35;
      return Math.trunc(availableBeds - this.severeCasesByRequestedTime);
    },
    get casesForICUByRequestedTime() {
      return Math.trunc(0.05 * this.infectionsByRequestedTime);
    },
    get casesForVentilatorsByRequestedTime() {
      return Math.trunc(0.02 * this.infectionsByRequestedTime);
    },
    get dollarsInFlight() {
      let result;
      const infectByIncome = this.infectionsByRequestedTime * data.region.avgDailyIncomePopulation;
      if (data.periodType === 'days') {
        result = infectByIncome * data.region.avgDailyIncomeInUSD * data.timeToElapse;
      } if (data.periodType === 'weeks') {
        result = infectByIncome * data.region.avgDailyIncomeInUSD * weeksToDays(data.timeToElapse);
      } if (data.periodType === 'months') {
        result = infectByIncome * data.region.avgDailyIncomeInUSD * monthsToDays(data.timeToElapse);
      }
      return Math.round(result * 10) / 10;
    }
  },
  severeImpact: {
    currentlyInfected: (data.reportedCases * 50),
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
    },
    get severeCasesByRequestedTime() {
      return this.infectionsByRequestedTime * 0.15;
    },
    get hospitalBedsByRequestedTime() {
      const availableBeds = data.totalHospitalBeds * 0.35;
      return Math.trunc(availableBeds - this.severeCasesByRequestedTime);
    },
    get casesForICUByRequestedTime() {
      return Math.trunc(0.05 * this.infectionsByRequestedTime);
    },
    get casesForVentilatorsByRequestedTime() {
      return Math.trunc(0.02 * this.infectionsByRequestedTime);
    },
    get dollarsInFlight() {
      let result;
      const infectByIncome = this.infectionsByRequestedTime * data.region.avgDailyIncomePopulation;
      if (data.periodType === 'days') {
        result = infectByIncome * data.region.avgDailyIncomeInUSD * data.timeToElapse;
      } if (data.periodType === 'weeks') {
        result = infectByIncome * data.region.avgDailyIncomeInUSD * weeksToDays(data.timeToElapse);
      } if (data.periodType === 'months') {
        result = infectByIncome * data.region.avgDailyIncomeInUSD * monthsToDays(data.timeToElapse);
      }
      return Math.round(result * 10) / 10;
    }
  }
});

export default covid19ImpactEstimator;
