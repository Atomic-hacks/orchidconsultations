import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/Button";
import {
  calculateInvestment,
  MINIMUM_INVESTMENT,
  money,
} from "../lib/calculator";
import { transition } from "../lib/motion";
import { PageHeader } from "../components/PageHeader";
import { images } from "../data/images";
export default function Calculator() {
  const [input, setInput] = useState("");
  const reduced = useReducedMotion();
  const amount = Number(input.replace(/,/g, ""));
  const result = calculateInvestment(amount);
  const invalid = input !== "" && !result.valid;
  return (
    <>
      <PageHeader
        eyebrow="01 / Investment calculator"
        title="Forecast your potential returns."
        intro="Enter an investment amount to instantly see your projected monthly and annual ROI based on Orchiddigital’s investment plans."
        image={images.pageHeaders.calculator}
      />
      <section className="calculator wrap">
        <div className="calculator-input">
          <h2>Enter investment amount</h2>
          <label htmlFor="investment">Amount (₦)</label>
          <div className="amount-field">
            <span aria-hidden="true">₦</span>
            <input
              id="investment"
              inputMode="decimal"
              value={input}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[\d,]*\.?\d{0,2}$/.test(value)) setInput(value);
              }}
              placeholder="5,000,000"
              aria-invalid={invalid}
              aria-describedby="investment-help investment-error"
            />
          </div>
          <p id="investment-help" className="muted">
            Minimum amount ₦5M. Investments up to ₦50M earn 3% monthly ROI;
            amounts above ₦50M earn 2.5%.
          </p>
          <p
            id="investment-error"
            className="field-error"
            role={invalid ? "alert" : undefined}
          >
            {invalid
              ? `Enter an amount of at least ${money(MINIMUM_INVESTMENT)}.`
              : ""}
          </p>
          <div className="amount-presets">
            {[5_000_000, 10_000_000, 50_000_000, 100_000_000].map((n) => (
              <button
                key={n}
                aria-pressed={amount === n}
                onClick={() => setInput(n.toLocaleString("en-NG"))}
              >
                {money(n)}
              </button>
            ))}
          </div>
          <div className="investment-note">
            <ArrowUpRight size={24} strokeWidth={1.2} />
            <p>Fixed 365-day tenure with monthly payouts</p>
          </div>
          <p className="muted">
            Calculations assume a fixed 12-month investment period with monthly
            payouts. Returns are reinvested or disbursed monthly based on your
            preference.
          </p>
        </div>
        <div className="calculator-results" aria-live="polite">
          <span className="small-caps">Investment snapshot</span>
          <div className="total-payout">
            <p>Total payout</p>
            <strong>{money(result.total)}</strong>
          </div>
          <div className="return-bar" aria-hidden="true">
            <motion.span
              animate={{
                scaleX: result.valid ? result.capital / result.total : 0.6,
              }}
              transition={reduced ? { duration: 0 } : transition}
            />
          </div>
          <dl>
            {[
              [
                `Monthly ROI (${(result.rate * 100).toFixed(1).replace(".0", "")}%)`,
                result.monthly,
              ],
              ["Total ROI (12 months)", result.annual],
              ["Capital returned", result.capital],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{money(Number(value))}</dd>
              </div>
            ))}
          </dl>
          <Button to="/services/investment" variant="light">
            Explore investment service
          </Button>
        </div>
      </section>
      <div className="section wrap calculator-footnotes flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-100 p-5 text-gray-900 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-start gap-3">
          <p className="m-0 text-sm leading-relaxed text-gray-700">
            Monthly ROI remitted directly to your preferred bank
          </p>

          <Button
            href="https://wa.me/9077251862"
            target="_target"
            rel="noopener noreferrer"
          >
            Contact Accountant
          </Button>
        </div>

        <p className="m-0 max-w-md text-sm leading-relaxed text-gray-700 sm:text-right">
          Dedicated relationship manager for investments above ₦50M
        </p>
      </div>
    </>
  );
}
