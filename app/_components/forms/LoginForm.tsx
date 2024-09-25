import React, { PropsWithChildren, useState } from "react"
import { useRouter } from "next/navigation";

import { Form } from "@/app/_components/forms";
import { Text } from "@/app/_components/ui/Text";

import { GRANT_TYPE, CLIENT_ID, CLIENT_SECRET } from "@/app/utils/constants";
import { AuthenticateService } from "@/app/services/public/authenticate";

type TLoginForm = PropsWithChildren & {
  setDisabled: (value: boolean) => void;
}

const LoginForm = React.forwardRef<HTMLFormElement, TLoginForm>(({ setDisabled, ...props }, ref) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    if (username !== '' || password !== '') {
      setDisabled(false)
    }

    formData.append('grant_type', `${GRANT_TYPE}`)
    formData.append('client_id', `${CLIENT_ID}`)
    formData.append('client_secret', `${CLIENT_SECRET}`)

    // To check the value of formData
    // const formDataObj = Object.fromEntries(formData.entries())
    // console.log("@@@: ", formDataObj)

    setIsLoading(true)
    try {
      const { isAuthenticated, error } = await AuthenticateService.getToken(new AbortController().signal, { formData })

      if (isAuthenticated) {
        router.push('/dashboard')
      } else if (!isAuthenticated && error) {
        console.log("Error in trying to log-in: ", error)
      }
    } catch (error) {
      console.log("Error in trying to log-in catch: ", error)
    } finally {
      setIsLoading(false)
    }

  }
  return (
    isLoading ? (<Text>Loading...</Text>) : (
      <Form
        onSubmit={onSubmit}
        ref={ref}
        {...props}
        sx={{ width: "90%", border: "1px solid red" }}
      />
    )
  )
})

LoginForm.displayName = "LoginForm"
export { LoginForm }
