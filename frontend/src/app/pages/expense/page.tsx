import Table from "@/app/components/table";
import Button from "@/app/components/button";
import Filter from "@/app/components/filter";

export default function Expense() {

  const handleAction: () => void = () => {
    console.log('Action executed!');
  };

  const columns: { key: string; name: string; }[] = [
    { key: "year", name: "Ano" },
    { key: "month", name: "Mês" },
    { key: "name", name: "Conta" },
    { key: "dueDate", name: "Data de Venc." },
    { key: "value", name: "Valor" },
    { key: "status", name: "Status" },
    { key: "actions", name: "" },
  ];

  const data: {
    id: number;
    year: number;
    month: string;
    name: string;
    dueDate: string;
    value: number;
    status: boolean;
    actions: string;
  }[] = [
      { id: 1, year: 2024, month: "Março", name: 'Aluguel', dueDate: '2024-03-01', value: 800, status: true, actions: '' },
      { id: 3, year: 2024, month: "Março", name: 'Energia elétrica', dueDate: '2024-03-01', value: 128.56, status: false, actions: '' },
      { id: 2, year: 2024, month: "Março", name: 'ISS', dueDate: '2024-03-01', value: 156.23, status: false, actions: '' },
      { id: 2, year: 2024, month: "Março", name: 'Alvará', dueDate: '2024-03-01', value: 169.95, status: false, actions: '' },
      { id: 2, year: 2024, month: "Março", name: 'Colix', dueDate: '2024-03-01', value: 65, status: true, actions: '' },
      { id: 2, year: 2024, month: "Março", name: 'Internet', dueDate: '2024-03-01', value: 99.9, status: false, actions: '' },
    ];

  return (
    <div className="content">
      <div className="flex flex-column justify-between">
        <Button onClick={handleAction} disabled={false} >
          Nova Despesa
        </Button>
        <Filter />
      </div>
      <Table columns={columns} data={data} />
    </div>
  )
}