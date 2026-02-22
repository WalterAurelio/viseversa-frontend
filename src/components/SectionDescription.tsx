import type { PropsWithChildren } from "react";

export default function SectionDescription({ children } : PropsWithChildren ) {
  return (
    <p className="h6-regular">{children}</p>
  )
}