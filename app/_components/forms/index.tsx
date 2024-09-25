import React from "react"
import { Box, SxProps } from "@mui/material"

type TFormProps = {
  sx?: SxProps;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = React.forwardRef<HTMLFormElement, TFormProps>(({ sx, onSubmit, ...props }, ref) => {
  const defaultSx: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  }
  return (
    <Box
      ref={ref}
      component="form"
      onSubmit={onSubmit}
      sx={{...defaultSx, ...sx }}
      {...props}
    />
  )
})

Form.displayName = "Form"
export { Form }
