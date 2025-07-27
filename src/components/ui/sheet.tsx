"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface SheetContentProps {
  className?: string
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
}

interface SheetTriggerProps {
  asChild?: boolean
  children: React.ReactNode
  onClick?: () => void
}

interface SheetHeaderProps {
  className?: string
  children: React.ReactNode
}

interface SheetTitleProps {
  className?: string
  children: React.ReactNode
}

const SheetContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

const Sheet = ({ open = false, onOpenChange, children }: SheetProps) => {
  const [internalOpen, setInternalOpen] = React.useState(open)

  const setOpen = React.useCallback((newOpen: boolean) => {
    setInternalOpen(newOpen)
    onOpenChange?.(newOpen)
  }, [onOpenChange])

  React.useEffect(() => {
    setInternalOpen(open)
  }, [open])

  return (
    <SheetContext.Provider value={{ open: internalOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetTrigger = ({ children, onClick }: SheetTriggerProps) => {
  const { setOpen } = React.useContext(SheetContext)

  return (
    <div
      onClick={() => {
        setOpen(true)
        onClick?.()
      }}
    >
      {children}
    </div>
  )
}

const SheetContent = ({ className, children, side = "right" }: SheetContentProps) => {
  const { open, setOpen } = React.useContext(SheetContext)

  const sideClasses = {
    top: "top-0 left-0 right-0 h-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
    right: "right-0 top-0 h-full w-3/4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
    bottom: "bottom-0 left-0 right-0 h-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
    left: "left-0 top-0 h-full w-3/4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
  }

  if (!open) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      
      {/* Sheet Content */}
      <div
        className={cn(
          "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out",
          sideClasses[side],
          className
        )}
        data-state={open ? "open" : "closed"}
      >
        {children}
      </div>
    </>
  )
}

const SheetHeader = ({ className, children }: SheetHeaderProps) => {
  return (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}>
      {children}
    </div>
  )
}

const SheetTitle = ({ className, children }: SheetTitleProps) => {
  return (
    <h2 className={cn("text-lg font-semibold text-foreground", className)}>
      {children}
    </h2>
  )
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle }