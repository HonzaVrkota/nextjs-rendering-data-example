interface StrategyLayoutProps {
  title: string;
  description: string;
  example: string;
  children: React.ReactNode;
}

const StrategyLayout = ({
  title,
  description,
  example,
  children,
}: StrategyLayoutProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{description}</p>
        <div className="bg-gray-100 p-3 rounded">
          <code className="text-sm">{example}</code>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Demo</h2>
        <div className="bg-white rounded-lg shadow p-6">{children}</div>
      </div>
    </div>
  );
};

export default StrategyLayout;
