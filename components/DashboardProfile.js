import { useState, useEffect } from "react"
import styled from "styled-components"
import { supabase } from "../lib/supabase"
import InfoOrder from "./InfoOrder"
import InfoLogs from "./InfoLogs"
import InfoBar from "./InfoBar"


export default function DashboardProfile({user})
{


  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  if (user.length > 0)
  {
  return (
    <Wrapper>
      <Greeting>Hi {user[0]["name"]},</Greeting>
      <InfoBar user={user}/>
      <InfoOrder user={user}/>
      <InfoLogs  user={user}/>

    </Wrapper>
  )
  }
  else return <Wrapper/>
}

const Wrapper = styled.div`
    position: absolute;
    top: 130px;
    left: 60px;
    border-style: groove;
    border-color: black;
    border-radius: 4px;
    margin: 20px;
    padding: 20px;
    width: 20%;
`

const Greeting = styled.div`
    font-size: 40px;
`
