import React from "react"
import { SxProps, Typography, TypographyProps } from "@mui/material";

const Text = React.forwardRef<HTMLParagraphElement, TypographyProps>(({ sx, ...props }, ref) => {
  const defaultSx: SxProps = {
    color: "#fff",
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px"
    }
  }
  return (
    <Typography
      ref={ref}
      sx={{ ...defaultSx, ...sx }}
      {...props}
    />
  )
})

Text.displayName = "Text"
export { Text }
