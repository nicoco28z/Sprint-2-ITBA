import React from 'react'
import {useAuth} from '../hooks/useAuth'

export default function ErrorPage() {

  const auth = useAuth()

  return (
    <>
      {auth.isLogged? "Hola" : "Adios"}
    </>
  )
}
