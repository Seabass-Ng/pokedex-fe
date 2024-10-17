import { type ReactNode } from "react";

type Props = {
  error: unknown;
  children: ReactNode;
};

const BodyLayout = ({
  error,
  children,
}: Props) => {
  if (error) return <div>Request Failed</div>;

  return children;
};

export default BodyLayout;