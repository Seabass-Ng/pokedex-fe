import { type ReactElement } from "react";

type Props = {
  error: unknown;
  isLoading: unknown;
  children: ReactElement;
};

const BodyLayout = ({
  error,
  isLoading,
  children,
}: Props) => {
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return children;
};

export default BodyLayout;