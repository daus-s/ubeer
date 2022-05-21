import styled from "styled-components"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"



export default function DrinksDashboard()
{
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);

  useEffect
  (
    () => { fetchDrinks()}, [loading]
  )

  const fetchDrinks = async () => {

    let { data: drinks, error } = await supabase.from('drinks').select('*')
    if (error) setError(error.message)
    else
    {
        setData(drinks)
        setLoading(false)
    }



  }


  return (
    <Packet>
      <a href="/drinks">Drinks</a>
      <Wrapper>
          <Icon>
            <img src={(data[0])?(data[0].imageUrl):("https://raw.githubusercontent.com/daus-s/ubeer/main/ubeer/default.png")} alt={(data[0])?(data[0].description):("")} width="80" height="160"/> <br/>
            {(data[0])?(data[0].drinkName):("")} - {(data[0])?(data[0].price):("")}
          </Icon>
          <Icon>
            <img src={(data[1])?(data[1].imageUrl):("https://raw.githubusercontent.com/daus-s/ubeer/main/ubeer/default.png")} alt={(data[1])?(data[1].description):("")} width="80" height="160"/> <br/>
            {(data[1])?(data[1].drinkName):("")} - {(data[1])?(data[1].price):("")}
          </Icon>
          <Icon>
            <img src={(data[2])?(data[2].imageUrl):("https://raw.githubusercontent.com/daus-s/ubeer/main/ubeer/default.png")} alt={(data[2])?(data[2].description):("")} width="80" height="160"/> <br/>
            {(data[2])?(data[2].drinkName):("")} - {(data[2])?(data[2].price):("")}
          </Icon>
          <Icon>
            <img src={(data[3])?(data[3].imageUrl):("https://raw.githubusercontent.com/daus-s/ubeer/main/ubeer/default.png")} alt={(data[3])?(data[3].description):("")} width="80" height="160"/> <br/>
            {(data[3])?(data[3].drinkName):("")} - {(data[3])?(data[3].price):("")}
          </Icon>
          <Icon>
            <img src={(data[4])?(data[4].imageUrl):("https://raw.githubusercontent.com/daus-s/ubeer/main/ubeer/default.png")} alt={(data[4])?(data[4].description):("")} width="80" height="160"/> <br/>
            {(data[4])?(data[4].drinkName):("")} - {(data[4])?(data[4].price):("")}
          </Icon>
          <Icon>
            <img src={(data[5])?(data[5].imageUrl):("https://raw.githubusercontent.com/daus-s/ubeer/main/ubeer/default.png")} alt={(data[5])?(data[5].description):("")} width="80" height="160"/> <br/>
            {(data[5])?(data[5].drinkName):("")} - {(data[5])?(data[5].price):("")}
          </Icon>
      </Wrapper>
    </Packet>
  )
}

const Packet = styled.div`
  position: absolute;
  margin: 20px;

  left: 60px;
  top: 475px;
  a {
    font-size: 32px;
    color: navy;
  }
`
const Wrapper = styled.div`
    display: grid;
    row-gap: 20px;
    position: absolute;
    border-style: groove;
    border-color: black;
    border-radius: 4px;

    padding: 25px;
    width: 480px;

    grid-template-columns: 1fr 1fr 1fr;
`
const Icon = styled.div`
    width: 80px;
`
