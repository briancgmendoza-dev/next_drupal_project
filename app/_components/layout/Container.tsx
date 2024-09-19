import React from "react"
import { Box, BoxProps, SxProps } from "@mui/material";

type TContainer = BoxProps & {
  component?: React.ElementType
}

const Container = React.forwardRef<HTMLDivElement, TContainer>(({ sx, component = "div", ...props }, ref) => {
  const defaultSx: SxProps = {
    width: "100%",
    bgcolor: "#000",
    p: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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

Container.displayName = "Container"
export { Container }
