import type { PropsWithChildren } from "react";

export default function SectionDescription({ children } : PropsWithChildren ) {
  return (
    <p className="text-base leading-[24.32px] lg:text-xl lg:leading-[30.4px]">{children}</p>
  )
}