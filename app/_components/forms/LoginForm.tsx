import React, { PropsWithChildren, useState } from "react"
import { Box } from "@mui/material"
import { useRouter } from "next/navigation";

import { GRANT_TYPE, CLIENT_ID, CLIENT_SECRET } from "@/app/utils/constants";
import { AuthenticateService } from "@/app/services/public/authenticate";

const LoginForm = React.forwardRef<HTMLFormElement, PropsWithChildren>((props, ref) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
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
    isLoading ? (<Box>Loading...</Box>) : (
      <Box
        component="form"
        onSubmit={onSubmit}
        ref={ref}
        {...props}
      />
    )
  )
})

LoginForm.displayName = "LoginForm"
export { LoginForm }
