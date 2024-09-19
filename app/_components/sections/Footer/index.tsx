"use client"

import React from "react"
import { Container } from "@/app/_components/layout/Container"
import { FooterPurple } from "@/app/_components/sections/Footer/FooterPurple"
import { FooterWhite } from "@/app/_components/sections/Footer/FooterWhite"

type TConfig = {
  config_items: {
    [key: string]: string
  }
}

const Footer = React.forwardRef<HTMLDivElement, TConfig>(({ config_items, ...props }, ref) => {
  if (!config_items) return null
  return (
    <Container
      ref={ref}
      {...props}
      component="footer"
      sx={{
        position: "fixed",
        top: "auto",
        bottom: 0,
        padding: 0,
        flexDirection: "column",
      }}
    >
      <FooterPurple
        copyRight={config_items?.["Copy Right"] ?? ""}
        termsAndCondition={{
          text: config_items?.["Terms and Conditions"] ?? "",
          onClick: () => console.log("@@@ TAC")
        }}
        privacyPolicy={{
          text: config_items?.["Privacy Policy"] ?? "",
          onClick: () => console.log("@@@ PP")
        }}
      />
      <FooterWhite text={config_items?.["Government Warning"] ?? ""} />
    </Container>
  )
})

Footer.displayName = "Footer"
export { Footer }
