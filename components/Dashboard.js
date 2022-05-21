import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"
import Orders from "./Orders"
import Header from "./Header.js"
import styled from "styled-components"
import DashboardProfile from "./DashboardProfile"
import DrinksDashboard from "./DrinksDashboard"
import DashboardLog from "./DashboardLog"
import DashboardOrder from "./DashboardOrder"


export default function Dashboard({ user }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect
    (
      () => {
      fetchEmployee()
    }, [loading]
    )




    const fetchEmployee = async () => {
      let { data: employee, error } = await supabase
          .from('employee')
          .select('*')
          .like('username', user.email)
      if (error) setError(error.message)
      else {
          setData(employee)
          setLoading(false)
      }

    }







    if (!data) {
        return (
            <Wrapper>
              <Header/>
            </Wrapper>
          )
    }

    if (error) {
        return <Wrapper>{JSON.stringify(error)}</Wrapper>
    }


    return (
      <Wrapper>
        <Header/>
        <DashboardProfile user={data}/>
        <DashboardLog user={data}/>
        <DashboardOrder user={data}/>
        <DrinksDashboard/>

      </Wrapper>
    )
}


const Wrapper = styled.div`
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
    bottom:0px;
`
