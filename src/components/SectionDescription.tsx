import type { PropsWithChildren } from "react";

export default function SectionDescription({ children } : PropsWithChildren ) {
  return (
    <p className="text-body lg:text-h6">{children}</p>
  )
}