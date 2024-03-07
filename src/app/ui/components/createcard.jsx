import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { React } from "react"
import { DatePickerDemo } from "./calender";
import { ComboboxDemo } from "./combobox";


  
  export default function CreateCard() {
    return (
      <>
      <Textarea />
      <DatePickerDemo/>
      <ComboboxDemo/>
      </>
    );
  }

