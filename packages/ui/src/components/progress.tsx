"use client"

import * as React from "react"
import { cn } from "@repo/ui/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number; max?: number }
>(({ className, value = 0, max = 100, ...props }, ref) => (
  <div
    ref={ref}
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={max}
    aria-valuenow={value}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <div
      className="h-full bg-primary transition-all duration-300 ease-in-out rounded-full"
      style={{ width: `${(value / max) * 100}%` }}
    />
  </div>
))
Progress.displayName = "Progress"

export { Progress }
