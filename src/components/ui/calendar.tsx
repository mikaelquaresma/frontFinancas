"use client"

import * as React from "react"
import { ChevronLeft } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const isDark = className?.includes('dark-calendar')
  
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: cn(
          "text-sm font-medium",
          isDark ? "text-white" : "text-gray-900"
        ),
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          isDark 
            ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white" 
            : "border-gray-300 text-gray-700 hover:bg-gray-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: cn(
          "rounded-md w-9 font-normal text-[0.8rem] flex items-center justify-center",
          isDark ? "text-gray-400" : "text-gray-600"
        ),
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative flex items-center justify-center [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
          isDark 
            ? "text-gray-300 hover:bg-gray-700 hover:text-white" 
            : "text-gray-900 hover:bg-gray-100"
        ),
        day_range_end: "day-range-end",
        day_selected: cn(
          "bg-primary-custom text-white hover:bg-primary-custom focus:bg-primary-custom focus:text-white"
        ),
        day_today: cn(
          isDark 
            ? "bg-gray-700 text-gray-100" 
            : "bg-gray-100 text-gray-900"
        ),
        day_outside: cn(
          "day-outside opacity-50 aria-selected:opacity-30",
          isDark 
            ? "text-gray-500 aria-selected:bg-gray-700 aria-selected:text-gray-400" 
            : "text-gray-400 aria-selected:bg-gray-100 aria-selected:text-gray-500"
        ),
        day_disabled: cn(
          "opacity-50",
          isDark ? "text-gray-500" : "text-gray-400"
        ),
        day_range_middle: cn(
          isDark 
            ? "aria-selected:bg-gray-700 aria-selected:text-gray-100" 
            : "aria-selected:bg-gray-100 aria-selected:text-gray-900"
        ),
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: () => <ChevronLeft className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }