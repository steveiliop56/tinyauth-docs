interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = ({
  title,
  description,
  icon,
  children,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 shadow-xs border border-fd-border rounded-md hover:border-fd-accent transition-colors max-w-xs">
      {icon}
      <div className="flex flex-col gap-2">
        <p className="text-md font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      {children}
    </div>
  );
};
