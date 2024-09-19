import React from "react"
import { SxProps, Typography, TypographyProps } from "@mui/material";
import { camelFont } from "@/app/fonts";

const CamelText = React.forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const defaultSx: SxProps = {
    color: "yellow",
    fontWeight: "900",
    fontFamily: camelFont.style,
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
      sx={defaultSx}
      {...props}
    />
  )
})

CamelText.displayName = "CamelText"
export { CamelText }
