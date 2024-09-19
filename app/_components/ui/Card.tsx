import React from "react"
import { Box, BoxProps, SxProps } from "@mui/material";

type TCardProps = BoxProps & {
  component?: React.ElementType
}

const Card = React.forwardRef<HTMLDivElement, TCardProps>(({ sx, component = "div", ...props }, ref) => {
  const defaultSx: SxProps = {
    width: "100%",
    height: "100vh",
    bgcolor: "#000",
    p: "1rem 2rem"
  }
  return (
    <Box
      ref={ref}
      component={component}
      sx={{ ...defaultSx, ...sx }}
      {...props}
    />
  )
})

Card.displayName = "Card"
export { Card }
