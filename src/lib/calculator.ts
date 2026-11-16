export const MINIMUM_INVESTMENT = 5_000_000;
export const RATE_THRESHOLD = 50_000_000;
export function calculateInvestment(amount: number) {
  const valid = Number.isFinite(amount) && amount >= MINIMUM_INVESTMENT;
  const rate = amount > RATE_THRESHOLD ? 0.025 : 0.03;
  const capital = valid ? amount : 0;
  const monthly = capital * rate;
  return { valid, rate, capital, monthly, annual: monthly * 12, total: capital + monthly * 12 };
}
export const money = (amount: number) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
