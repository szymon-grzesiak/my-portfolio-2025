import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const typography = cva("font-poppins", {
  variants: {
    variant: {
      h1: "font-bold text-[64px] leading-[83.2px] tracking-[-0.01em] text-center",
      h2: "font-bold text-[48px] leading-[55.2px] tracking-[-0.01em] text-center",
      h3: "font-semibold text-[32px] leading-[33.6px] tracking-[-0.005em] text-center",
      "base-regular": "font-normal text-[24px] leading-[31.2px] text-left",
      "base-bold": " font-semibold text-[24px] leading-[31.2px] text-left",
      "p-regular":
        "font-normal text-[14px] leading-[22px] md:text-[20px] md:leading-[30px] text-left",
      "p-bold": " font-semibold text-[20px] leading-[26px] text-left",
      "body-regular": "font-normal text-[18px] leading-[28.8px] text-left",
      "body-bold": " font-semibold text-[18px] leading-[28.8px] text-left",
      "small-regular": " font-normal text-[14px] leading-[21.7px] text-left",
      "small-bold": " font-semibold text-[14px] leading-[20.3px] text-left",
    },
  },
});

interface TypographyProps extends VariantProps<typeof typography> {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<
  TypographyProps & React.ComponentPropsWithoutRef<any>
> = ({ children, className, variant, as = "p", ...props }) => {
  const Component = as;
  const classes = clsx(typography({ variant }), className);

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
