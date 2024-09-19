"use client"

import { Container } from "@/app/_components/layout/Container"
import { Text } from "@/app/_components/ui/Text";
import { Footer } from "@/app/_components/sections/Footer";
import { LoginForm } from "@/app/_components/forms/LoginForm";
import { TextField, Button } from "@mui/material";

import { usePublicConfig } from "./hooks/usePublicConfig";

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

  return (
    <Container component="main" sx={{ height: "100vh", bgcolor: "#FDE600", flexDirection: "column", padding: 0 }}>
      <Text component="h1" sx={{ color: "#1D71A4", fontWeight: "900" }}>Log-in</Text>
      <LoginForm>
        <TextField
          name="username"
          label="username"
          />
        <TextField
          name="password"
          label="password"
          />
        <Button type="submit">Submit</Button>
      </LoginForm>
      {config.isLoading ? <Text>Loading...</Text> : (
        <Footer config_items={config.data?.config_items ?? {}} />
      )}
    </Container>
  );
}
