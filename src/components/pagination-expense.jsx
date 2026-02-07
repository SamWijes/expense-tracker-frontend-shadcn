import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
// import { useState } from "react"

export function PaginationExpense({ actPage,setActPage,expenseEntries, className }) {
  // const [actPage, setActPage] = useState(1);
  const totalPages=Math.ceil(expenseEntries/5);
  return (
    <Pagination className={className}>
      <PaginationContent>
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i+1}>
            <PaginationLink onClick={(e)=>{e.preventDefault(); setActPage(i + 1)}}
             isActive={(i+1)==actPage}>{i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
{/* 
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem> */}
      </PaginationContent>
    </Pagination>
  )
}
