import type { StructuredDataValue } from "@/lib/structured-data";
import { serializeStructuredData } from "@/lib/structured-data";

export function StructuredData({ data }: { data: StructuredDataValue | StructuredDataValue[] }) {
  const values = Array.isArray(data) ? data : [data];
  const uniqueValues = [
    ...new Map(values.map((value) => [serializeStructuredData(value), value])).values(),
  ];

  return (
    <>
      {uniqueValues.map((value) => {
        const serialized = serializeStructuredData(value);
        return (
          <script
            key={serialized}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serialized }}
          />
        );
      })}
    </>
  );
}
