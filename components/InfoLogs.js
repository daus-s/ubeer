import styled from "styled-components"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"


export default function InfoOrder({user})
{
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);


  useEffect
  (
    () => { fetchLogs()}, [loading]
  )


  const fetchLogs = async () => {
    if (user)
    {
      let { data: log, error } = await supabase.from('log').select('*').eq('barID', user[0].barID)
      if (error) setError(error.message)
      else
      {
          setData(log)
          setLoading(false)
      }

    }

  }

  if (data)
  {
    return (
    <Wrapper>
      You have <a href="/orders">{data.length}</a> logs to take care of!
    </Wrapper>
  )
  }
  else return (
    <Wrapper>
      You have <a href="/orders">no</a> logs to take care of!
    </Wrapper>
  )
}


const Wrapper = styled.p`
    font-size: 24px;

`
