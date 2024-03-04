import Table from "@/app/components/table";

export default function Revenue() {
  const columns: { key: string; name: string; }[] = [
    { key: "name", name: "Nome" },
    { key: "age", name: "Idade" },
  ];

  const data: { id: number; name: string; age: number; }[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 3, name: 'Bob Smith', age: 22 },
  ];

  return (
    <div className="content">
      Revenue
      <Table columns={columns} data={data} />
    </div>
  )
}