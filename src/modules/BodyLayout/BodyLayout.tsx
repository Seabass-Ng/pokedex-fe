type Props = {
  error: unknown;
  isLoading: unknown;
  successfulElement: React.ReactElement;
};

const BodyLayout = ({
  error,
  isLoading,
  successfulElement
}: Props) => {
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return successfulElement;
};

export default BodyLayout;