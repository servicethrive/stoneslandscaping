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
    <Check className="h-5 w-5 text-green-600 mx-auto" />
  ) : (
    <X className="h-5 w-5 text-red-400 mx-auto" />
  );
};

const ComparisonTable = ({ title, optionALabel, optionBLabel, rows }: ComparisonTableProps) => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">{title}</h2>
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="text-left px-6 py-4 font-semibold text-foreground">Feature</th>
              <th className="text-center px-6 py-4 font-semibold text-foreground">{optionALabel}</th>
              <th className="text-center px-6 py-4 font-semibold text-foreground">{optionBLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/50"}>
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
