import React from "react"

import { Button as MUIButton, ButtonProps, SxProps } from "@mui/material"

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ sx, ...props }, ref) => {
  const defaultSx: SxProps = {
    width: "100%",
    height: {
      xs: "45px",
      md: "60px"
    },
    borderRadius: "15px",
    fontWeight: "600",
    padding: ".5rem 1rem",
    fontSize: {},

    "&:disabled": {
      backgroundImage: "linear-gradient(#959595, #A7A7A7)"
    }
  }
  return (
    <MUIButton
      ref={ref}
      sx={{ ...defaultSx, ...sx }}
      {...props}
    />
  )
})

Button.displayName = "Button"
export { Button }
