"use client"

import * as React from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useTheme } from "@/stores/ThemeContext"

interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = "Selecione uma data",
  className,
  disabled = false,
}: DatePickerProps) {
  const { theme } = useTheme()
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            theme === 'dark' 
              ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600 hover:text-white" 
              : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(
        "w-auto p-0",
        theme === 'dark' 
          ? "bg-gray-800 border-gray-700" 
          : "bg-white border-gray-200"
      )}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          locale={ptBR}
          className={theme === 'dark' ? "dark-calendar" : ""}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}