import { useState, useEffect, useRef } from "react"
import { PublicService } from "@/app/services/public/config"

type ConfigState = Awaited<ReturnType<typeof PublicService.config>>;

export const usePublicConfig = () => {
  const abortControllerRef = useRef<AbortController | null>(null)
  const isMountedRef = useRef<boolean>(false)
  const [state, setState] = useState<ConfigState>({
    isLoading: true,
    data: undefined,
    error: undefined
  })

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true
      return
    }

    abortControllerRef.current = new AbortController()
    PublicService.config(abortControllerRef.current.signal).then(setState)
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  return state
}
