import { describe, expect, test } from "bun:test";

import { calculateLoan, toMonthlyEffectiveRate } from "./loan-calculator.ts";

describe("loan calculator", () => {
  test("converts an effective annual rate to its equivalent monthly rate", () => {
    expect(toMonthlyEffectiveRate(12, "effective_annual")).toBeCloseTo(0.00948879, 7);
  });

  test("calculates a fixed monthly payment and totals", () => {
    const result = calculateLoan({
      principal: 1_000_000,
      ratePercent: 12,
      termMonths: 12,
      rateType: "effective_annual",
    });

    expect(result.periodicPayment).toBeCloseTo(88_562.07, 2);
    expect(result.totalPaid).toBeCloseTo(1_062_744.81, 2);
    expect(result.totalInterest).toBeCloseTo(62_744.81, 2);
    expect(result.schedule).toHaveLength(12);
    expect(result.schedule.at(-1)?.remainingBalance).toBeCloseTo(0, 8);
    expect(result.schedule.reduce((sum, payment) => sum + payment.principalPaid, 0)).toBeCloseTo(
      1_000_000,
      6,
    );
    expect(result.schedule.reduce((sum, payment) => sum + payment.interestPaid, 0)).toBeCloseTo(
      result.totalInterest,
      6,
    );
  });

  test("supports a zero-interest scenario", () => {
    const result = calculateLoan({
      principal: 600_000,
      ratePercent: 0,
      termMonths: 6,
      rateType: "monthly_effective",
    });

    expect(result.periodicPayment).toBe(100_000);
    expect(result.totalPaid).toBe(600_000);
    expect(result.totalInterest).toBe(0);
    expect(result.schedule).toHaveLength(6);
    expect(result.schedule.at(-1)?.remainingBalance).toBe(0);
    expect(result.schedule.reduce((sum, payment) => sum + payment.principalPaid, 0)).toBe(600_000);
  });

  test("rejects invalid principal, rates, and terms", () => {
    expect(() =>
      calculateLoan({
        principal: 0,
        ratePercent: 12,
        termMonths: 12,
        rateType: "effective_annual",
      }),
    ).toThrow();
    expect(() => toMonthlyEffectiveRate(-1, "effective_annual")).toThrow();
    expect(() =>
      calculateLoan({
        principal: 1_000_000,
        ratePercent: 12,
        termMonths: 1.5,
        rateType: "effective_annual",
      }),
    ).toThrow();
  });
});
