import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  optionA: boolean | string;
  optionB: boolean | string;
}

interface ComparisonTableProps {
  title: string;
  optionALabel: string;
  optionBLabel: string;
  rows: ComparisonRow[];
}

const renderCell = (value: boolean | string) => {
  if (typeof value === "string") return <span className="text-sm text-foreground">{value}</span>;
  return value ? (
    <Check className="h-5 w-5 text-green-700 mx-auto" />
  ) : (
    <X className="h-5 w-5 text-red-400 mx-auto" />
  );
};

const ComparisonTable = ({ title, optionALabel, optionBLabel, rows }: ComparisonTableProps) => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="overflow-x-auto border border-border/60 rounded-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-cream">
              <th className="text-left px-6 py-5 font-semibold text-foreground tracking-wide">Feature</th>
              <th className="text-center px-6 py-5 font-semibold text-foreground tracking-wide">{optionALabel}</th>
              <th className="text-center px-6 py-5 font-semibold text-foreground tracking-wide">{optionBLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                <td className="px-6 py-4 text-foreground">{row.feature}</td>
                <td className="px-6 py-4 text-center">{renderCell(row.optionA)}</td>
                <td className="px-6 py-4 text-center">{renderCell(row.optionB)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;