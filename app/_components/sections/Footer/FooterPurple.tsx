"use client"

import React from "react"
import { Container } from "@/app/_components/layout/Container"
import { Text } from "@/app/_components/ui/Text"
import { Box, BoxProps, SxProps } from "@mui/material"

type TFooterPurple = BoxProps & {
  copyRight: string,
  termsAndCondition: {
    text: string
    onClick: () => void
  },
  privacyPolicy: {
    text: string
    onClick: () => void
  }
}

const FooterPurple = React.forwardRef<HTMLDivElement, TFooterPurple>(({ copyRight, termsAndCondition, privacyPolicy, ...props}, ref) => {
  const defaultSx: SxProps = {
    justifyContent: "space-between",
    bgcolor: "#951B81",
    color: "#fff",
    height: "auto",
    p: "5px"
  }
  return (
    <Container
      ref={ref}
      sx={defaultSx}
      {...props}
    >
      <Text sx={{ fontSize: 9 }}>{copyRight}</Text>
      <Container sx={{ bgcolor: "inherit", width: "auto", p: 0 }}>
      <Text
        onClick={termsAndCondition.onClick}
        sx={{ cursor: "pointer", fontSize: 9, textDecoration: "underline", mr: 1 }}
      >
        {termsAndCondition.text}
      </Text>
        <Text
          onClick={privacyPolicy.onClick}
          sx={{ cursor: "pointer", fontSize: 9, textDecoration: "underline" }}
        >
          {privacyPolicy.text}
        </Text>
      </Container>
    </Container>
  )
})

FooterPurple.displayName = "FooterPurple"
export { FooterPurple }
