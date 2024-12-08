export function calculateEMI(
  onRoadPrice,
  { downPayment, interestRate, tenure }
) {
  const loanAmount = Number((onRoadPrice - downPayment).toFixed());
  const rateOfInterest = interestRate / 100 / 12;
  const tenureInMonths = tenure * 12;

  const EMI =
    (loanAmount * rateOfInterest * (1 + rateOfInterest) ** tenureInMonths) /
    ((1 + rateOfInterest) ** tenureInMonths - 1);

  const roundedOffEMI = Number(EMI.toFixed());

  const totalInterestPayable = roundedOffEMI * tenureInMonths - loanAmount;

  return {
    EMI: roundedOffEMI,
    loanAmount: loanAmount,
    onRoadPrice,
    totalInterestPayable,
  };
}
