import type { ReactNode } from "react";

interface Props {
  child: ReactNode;
}
export default function wrapper({ child }: Props) {
  <div className="p-2">{child} </div>;
}
