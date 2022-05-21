import styled from "styled-components"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"


export default function DashboardOrder({user})
{
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect
  (
    () => {
    fetchLog()
  }, [loading]
  )


  console.log("order: " + JSON.stringify(data))
  console.log(user)


  const fetchLog = async () => {
    if (user.length > 0)
    {
      let { data: order, error } = await supabase.from('orders').select('*, drinks!inner(*)').eq('barID', user[0].barID)
      if (error) setError(error.message)
      else {
          setData(order)
          setLoading(false)
      }

      console.log("log: " + data)
    }
  }

  if (data.length > 1)
  {
  return (
    <Packet>
      <a href="/orders">Orders</a>
      <Wrapper>
          <img src={data[0].drinks.imageUrl} width="100"  height="210"/> <br/>
          Contents: {(data[0].contents)} <br/>
          Total: {data[0].total}
      </Wrapper>
    </Packet>
  )
  }
  else
  { return <Packet>
    <a href="/orders">Orders</a>
    <Wrapper>
        <img src="https://raw.githubusercontent.com/daus-s/ubeer/main/ubeer/default.png" width="100"  height="200"/>
        <br/>
        Contents: <br/>
        Total:
    </Wrapper>
  </Packet>
  }

}



const Packet = styled.div`
  position: absolute;
  margin: 20px;

  left: 700px;
  top: 120px;

  a {
    font-size: 32px;
    color: navy;
  }
`


const Wrapper = styled.div`
  font-size: 24px;

`
