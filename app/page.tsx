"use client"

import { Container } from "@/app/_components/layout/Container"
import { Text } from "@/app/_components/ui/Text";
import { Footer } from "@/app/_components/sections/Footer";
import { LoginForm } from "@/app/_components/forms/LoginForm";
import { Button } from "@/app/_components/ui/Button";
import { TextField } from "@mui/material";

import { usePublicConfig } from "@/app/hooks/usePublicConfig";
import { useState } from "react";

type TConfigValues = {
  config_items: {
    [key: string]: string
  },
  menu_items: {
    [key: string]: string
  }
}

type TConfigState = {
  data?: TConfigValues;
  isLoading: boolean;
  error?: unknown;
}

export default function Home() {
  const config: TConfigState = usePublicConfig()
  const [disabled, setDisabled] = useState<boolean>(true)

  return (
    <Container component="main" sx={{ height: "100vh", bgcolor: "#FDE600", flexDirection: "column", padding: 0 }}>
      <Text component="h1" sx={{ color: "#1D71A4", fontWeight: "900" }}>Log-in</Text>
      <LoginForm setDisabled={setDisabled}>
        <TextField
          name="username"
          label="username"
          sx={{ width: "100%" }}
          />
        <TextField
          name="password"
          label="password"
          sx={{ width: "100%" }}
          />
        <Button
          type="submit"
          // disabled={disabled}
          sx={{
            color: "yellow",
            backgroundImage: "linear-gradient(#10527B, #1D71A4)"
          }}
        >
          Submit
        </Button>
      </LoginForm>
      {config.isLoading ? <Text>Loading...</Text> : (
        <Footer config_items={config.data?.config_items ?? {}} />
      )}
    </Container>
  );
}
