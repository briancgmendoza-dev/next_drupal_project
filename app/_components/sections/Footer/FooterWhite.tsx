import React from "react"
import { BoxProps, SxProps } from "@mui/material"

import { Container } from "@/app/_components/layout/Container"
import { Text } from "@/app/_components/ui/Text"

type TFooterWhite = BoxProps & { text: string }

const FooterWhite = React.forwardRef<HTMLDivElement, TFooterWhite>((props, ref) => {
  const defaultSx: SxProps = {
    height: "14svh",
    bgcolor: "#fff",
    color: "#000",
    textTransform: "uppercase"
  }
  return (
    <Container
      ref={ref}
      sx={defaultSx}
      {...props}
    >
      <Text sx={{ color: "inherit" }}>{props.text}</Text>
    </Container>
  )
})

FooterWhite.displayName = "FooterWhite"
export { FooterWhite }
