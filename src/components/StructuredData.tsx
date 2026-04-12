interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

const StructuredData = ({ data }: StructuredDataProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default StructuredData;
