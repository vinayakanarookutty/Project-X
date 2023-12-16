'use client'

import { useSession } from "next-auth/react"

export default  function IndexPage() {
  const session = useSession()
  console.log(session)
  return <div>Home page</div>
}
