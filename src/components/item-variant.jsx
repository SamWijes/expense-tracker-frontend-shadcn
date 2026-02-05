import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { InboxIcon } from "lucide-react"

export function ItemVariant() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with a visible border.
          </ItemDescription>
        </ItemContent>
      </Item>
     
    </div>
  )
}
