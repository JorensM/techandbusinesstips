import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-7xl mb-2 font-bold tracking-tighter leading-tight md:leading-none text-left">
      {children}
    </h1>
  );
}
