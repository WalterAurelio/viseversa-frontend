import type { WithClassName } from "../types/WithClassName";

function StatusPin({ className }: WithClassName) {
  return <div className={`aspect-square w-3 rounded-full border-width-m border-neutral-inverse-primary bg-lime ${className}`}></div>;
}
export default StatusPin;
