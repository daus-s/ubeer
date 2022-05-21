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
    () => { fetchOrders()}, [loading]
  )



  const fetchOrders = async () => {
    if (user)
    {
      let { data: order, error } = await supabase
          .from('orders')
          .select('*')
          .eq('barID', user[0].barID)
      if (error) setError(error.message)
      else {
          setData(order)
          setLoading(false)
    }
    }
  }
  


  if (data)
  {
    return (
      <Wrapper>
        You have <a href="/orders">{data.length}</a> orders to take care of!
      </Wrapper>
    )
  }
  else
  {
    return (
      <Wrapper>
        You have <a href="/orders">no</a> orders to take care of!
      </Wrapper>
    )
  }
}


const Wrapper = styled.p`
    font-size: 24px;

`
