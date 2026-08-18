export type LoanRateType = "effective_annual" | "monthly_effective";

export interface LoanCalculationInput {
  principal: number;
  ratePercent: number;
  termMonths: number;
  rateType: LoanRateType;
}

export interface AmortizationPayment {
  period: number;
  payment: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

export interface LoanCalculationResult {
  monthlyRate: number;
  periodicPayment: number;
  totalPaid: number;
  totalInterest: number;
  schedule: AmortizationPayment[];
}

function assertFinitePositive(value: number, field: string): void {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`${field} must be a finite number greater than zero`);
  }
}

export function toMonthlyEffectiveRate(ratePercent: number, rateType: LoanRateType): number {
  if (!Number.isFinite(ratePercent) || ratePercent < 0) {
    throw new RangeError("ratePercent must be a finite number greater than or equal to zero");
  }
  const rate = ratePercent / 100;
  return rateType === "effective_annual" ? Math.pow(1 + rate, 1 / 12) - 1 : rate;
}

export function calculateLoan(input: LoanCalculationInput): LoanCalculationResult {
  assertFinitePositive(input.principal, "principal");
  assertFinitePositive(input.termMonths, "termMonths");
  if (!Number.isInteger(input.termMonths)) {
    throw new RangeError("termMonths must be a whole number");
  }

  const monthlyRate = toMonthlyEffectiveRate(input.ratePercent, input.rateType);
  const periodicPayment =
    monthlyRate === 0
      ? input.principal / input.termMonths
      : (input.principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -input.termMonths));
  const totalPaid = periodicPayment * input.termMonths;

  let balance = input.principal;
  const schedule: AmortizationPayment[] = [];
  for (let period = 1; period <= input.termMonths; period += 1) {
    const interestPaid = balance * monthlyRate;
    const principalPaid = period === input.termMonths ? balance : periodicPayment - interestPaid;
    balance = Math.max(0, balance - principalPaid);
    schedule.push({
      period,
      payment: period === input.termMonths ? principalPaid + interestPaid : periodicPayment,
      principalPaid,
      interestPaid,
      remainingBalance: balance,
    });
  }

  return {
    monthlyRate,
    periodicPayment,
    totalPaid,
    totalInterest: totalPaid - input.principal,
    schedule,
  };
}
