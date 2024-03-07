import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { React } from "react"
import { DatePickerDemo } from "./calender";
import { ComboboxDemo } from "./combobox";
import { Button } from "@/components/ui/button"


  
  export default function CreateCard() {
    return (
<>
  <div className="flex max-w-screen-md p-4 m-4">
      <Textarea placeholder="レビューを入力してください" />
  </div>
  <div className="flex max-w-screen-md p-4 m-4">
  <DatePickerDemo />
  <ComboboxDemo />
  </div>

</>

    );
  }

