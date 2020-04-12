const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: (data.reportedCases * 10),
    get infectionsByRequestedTime() {
      return this.currentlyInfected * 1024;
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
