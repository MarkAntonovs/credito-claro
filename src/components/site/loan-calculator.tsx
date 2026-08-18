import { useMemo, useState } from "react";

import { calculateLoan, type LoanRateType } from "@/lib/loan-calculator";

const cop = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

function parseInput(value: string): number {
  return Number(value.replace(/[^0-9.,-]/g, "").replace(",", "."));
}

export function LoanCalculator({
  compact = false,
  scheduleMode,
}: {
  compact?: boolean;
  scheduleMode?: "hidden" | "preview" | "full";
}) {
  const [principal, setPrincipal] = useState("1000000");
  const [rate, setRate] = useState("24");
  const [term, setTerm] = useState("12");
  const [rateType, setRateType] = useState<LoanRateType>("effective_annual");

  const calculation = useMemo(() => {
    try {
      return calculateLoan({
        principal: parseInput(principal),
        ratePercent: parseInput(rate),
        termMonths: parseInput(term),
        rateType,
      });
    } catch {
      return null;
    }
  }, [principal, rate, rateType, term]);

  const fieldClass =
    "mt-1.5 min-h-11 w-full rounded-md border border-border-strong bg-background px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const resolvedScheduleMode = scheduleMode ?? (compact ? "hidden" : "preview");
  const schedule =
    resolvedScheduleMode === "full" ? calculation?.schedule : calculation?.schedule.slice(0, 12);

  return (
    <div className="rounded-lg border border-border-strong bg-card p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <label className="text-sm font-medium">
          Monto del crédito (COP)
          <input
            className={fieldClass}
            type="number"
            inputMode="numeric"
            min="1"
            step="50000"
            value={principal}
            onChange={(event) => setPrincipal(event.target.value)}
          />
        </label>
        <label className="text-sm font-medium">
          Tasa (%)
          <input
            className={fieldClass}
            type="number"
            inputMode="decimal"
            min="0"
            step="0.1"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />
        </label>
        <label className="text-sm font-medium">
          La tasa ingresada es
          <select
            className={fieldClass}
            value={rateType}
            onChange={(event) => setRateType(event.target.value as LoanRateType)}
          >
            <option value="effective_annual">Efectiva anual (E.A.)</option>
            <option value="monthly_effective">Efectiva mensual</option>
          </select>
        </label>
        <label className="text-sm font-medium">
          Plazo (meses)
          <input
            className={fieldClass}
            type="number"
            inputMode="numeric"
            min="1"
            max="600"
            step="1"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </label>
      </div>

      {calculation ? (
        <div className="mt-6" aria-live="polite">
          <dl className="grid gap-4 sm:grid-cols-3">
            {[
              ["Cuota mensual estimada", cop.format(calculation.periodicPayment)],
              ["Total estimado pagado", cop.format(calculation.totalPaid)],
              ["Intereses estimados", cop.format(calculation.totalInterest)],
            ].map(([label, value]) => (
              <div key={label} className="border-t-2 border-primary pt-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="num mt-2 text-xl font-semibold text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          {resolvedScheduleMode !== "hidden" && schedule ? (
            <div className="mt-7 overflow-x-auto" tabIndex={0}>
              <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                <caption className="mb-3 text-left font-semibold text-foreground">
                  {resolvedScheduleMode === "full"
                    ? `Tabla de amortización completa — ${schedule.length} cuotas`
                    : "Vista previa de amortización — primeras 12 cuotas"}
                </caption>
                <thead className="border-y border-border bg-surface text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2" scope="col">
                      Mes
                    </th>
                    <th className="px-3 py-2" scope="col">
                      Cuota
                    </th>
                    <th className="px-3 py-2" scope="col">
                      Capital
                    </th>
                    <th className="px-3 py-2" scope="col">
                      Interés
                    </th>
                    <th className="px-3 py-2" scope="col">
                      Saldo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((payment) => (
                    <tr key={payment.period} className="border-b border-border">
                      <th className="num px-3 py-2 font-medium" scope="row">
                        {payment.period}
                      </th>
                      <td className="num px-3 py-2">{cop.format(payment.payment)}</td>
                      <td className="num px-3 py-2">{cop.format(payment.principalPaid)}</td>
                      <td className="num px-3 py-2">{cop.format(payment.interestPaid)}</td>
                      <td className="num px-3 py-2">{cop.format(payment.remainingBalance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-5 rounded-md border border-danger-border bg-danger-soft p-3 text-sm text-danger-soft-foreground">
          Ingresa un monto y un plazo mayores que cero, una tasa no negativa y un plazo en meses
          completos.
        </p>
      )}

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Estimación con cuotas mensuales iguales y pagos al final de cada mes. La tasa E.A. se
        convierte a una tasa efectiva mensual equivalente. No incluye seguros, comisiones,
        impuestos, mora ni otros cargos. La oferta y el contrato del proveedor pueden producir un
        resultado distinto.
      </p>
    </div>
  );
}
