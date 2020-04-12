const covid19ImpactEstimator = (data) => ({
  data,
  estimate: {
    impact: {
      currentlyInfected: (data.reportedCases * 10),
      get infectionsByRequestime() {
        return this.currentlyInfected * 1024;
      }
    },
    severeImpact: {
      currentlyInfected: (data.reportedCases * 50),
      get infectionsByRequestime() {
        return this.currentlyInfected * 1024;
      }
    }
  }
});

export default covid19ImpactEstimator;
