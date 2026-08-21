import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import ArrowLeft from "../assets/icons/ArrowLeft.svg?react";
import { cn } from "../utils/cn";

const buttonVariants = cva("inline-flex h-13 items-center justify-center gap-s rounded-border-l px-13 py-m label-default", {
  variants: {
    color: {
      black: "",
      red: ""
    },
    buttonStyle: {
      fill: "text-neutral-inverse-primary",
      minimal: ""
    },
    state: {
      idle: "cursor-pointer",
      disabled: ""
    }
  },
  compoundVariants: [
    {
      color: "black",
      buttonStyle: "fill",
      state: "idle",
      class: "bg-neutral-inverse-primary hover:bg-neutral-inverse-tertiary"
    },
    {
      color: "red",
      buttonStyle: "fill",
      state: "idle",
      class: "bg-brand-primary hover:bg-brand-secondary"
    },
    {
      buttonStyle: "fill",
      state: "disabled",
      class: "bg-neutral-disabled text-neutral-disabled"
    },
    {
      color: "black",
      buttonStyle: "minimal",
      state: "idle",
      class: "text-neutral-primary hover:border-b hover:border-neutral-primary"
    },
    {
      color: "red",
      buttonStyle: "minimal",
      state: "idle",
      class: "text-brand-primary hover:border-b hover:border-brand-primary"
    },
    {
      buttonStyle: "minimal",
      state: "disabled",
      class: "text-neutral-disabled"
    }
  ],
  defaultVariants: {
    color: "black",
    buttonStyle: "fill",
    state: "idle"
  }
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    hasIcon?: boolean;
    icon?: ReactNode;
  };

function Button({ className, children = "Button", hasIcon = true, icon = <ArrowLeft className="size-4.5" />, /* state, */ buttonStyle, color, disabled, ...props }: ButtonProps) {
  // const isDisabled = disabled || state === "disabled";

  return (
    <button className={cn(buttonVariants({ state: disabled ? "disabled" : "idle", buttonStyle, color }), className)} disabled={disabled} {...props}>
      {children}
      {hasIcon && icon}
    </button>
  );
}

export default Button;
