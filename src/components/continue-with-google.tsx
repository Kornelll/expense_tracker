"use client"
import { useState } from "react"

import { signIn } from "next-auth/react"
import { toast } from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"

const ContinueWithGoogle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginWithGoogle = () => {
    setIsLoading(true)

    signIn("google", { callbackUrl: "/dashboard" })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsLoading(false))
  }

  return (
    <Button isLoading={isLoading} onClick={loginWithGoogle}>
      {isLoading ? null : <FcGoogle className="h-6 w-6 mr-2" />}
      Continue with Google
    </Button>
  )
}

export default ContinueWithGoogle
