export function formatPnL(pnl: number): string {
  const absPnL = Math.abs(pnl);
  const formattedPnL = absPnL.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${pnl >= 0 ? "+" : "-"}₹${formattedPnL}`;
}
