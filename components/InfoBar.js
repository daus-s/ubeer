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
    () => { fetchBar()}, [loading]
  )



  const fetchBar = async () => {
    if (user)
    {
      let { data: log, error } = await supabase.from('bars').select('name').eq('barID', user[0].barID)
      if (error) setError(error.message)
      else
      {
          setData(log)
          setLoading(false)
      }

    }

  }
  if (data.length  > 0)
  {
    return (
    <Wrapper>
      Welcome to {data[0].name}
    </Wrapper>
  )
  }
  else return (
    <Wrapper>
      Welcome to ??? <br/>
      What bar do you work at?
    </Wrapper>
  )
}


const Wrapper = styled.p`
    font-size: 24px;

`
