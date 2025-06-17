import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"

import data from "./data.json"


export default function Dashboard() {
  return (
    <>
      <SectionCards />
      <DataTable data={data} />
    </>
  )
}
