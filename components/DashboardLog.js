import styled from "styled-components"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"


export default function DashboardLog({user})
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




  const fetchLog = async () => {
    if (user.length > 0)
    {
      let { data: log, error } = await supabase.from('log').select('*').eq('barID', user[0].barID)
      if (error) setError(error.message)
      else {
          setData(log)
          setLoading(false)
      }

      console.log("log: " + data)
    }
  }

  return (
    <Packet>
      <a href="/logs">Logs</a>
      <Wrapper>
          <tr>
            <th>ID No.</th>
            <th>Created</th>
            <th>Type</th>
          </tr>
          <tr>
            <td>{data[0]?(data[0].transactionID):(" ")}</td>
            <td>{data[0]?(data[0].created_at):(" ")}</td>
            <td>{data[0]?(data[0].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[1]?(data[1].transactionID):(" ")}</td>
            <td>{data[1]?(data[1].created_at):(" ")}</td>
            <td>{data[1]?(data[1].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[2]?(data[2].transactionID):(" ")}</td>
            <td>{data[2]?(data[2].created_at):(" ")}</td>
            <td>{data[2]?(data[2].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[3]?(data[3].transactionID):(" ")}</td>
            <td>{data[3]?(data[3].created_at):(" ")}</td>
            <td>{data[3]?(data[3].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[4]?(data[4].transactionID):(" ")}</td>
            <td>{data[4]?(data[4].created_at):(" ")}</td>
            <td>{data[4]?(data[4].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[5]?(data[5].transactionID):(" ")}</td>
            <td>{data[5]?(data[5].created_at):(" ")}</td>
            <td>{data[5]?(data[5].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[6]?(data[6].transactionID):(" ")}</td>
            <td>{data[6]?(data[6].created_at):(" ")}</td>
            <td>{data[6]?(data[6].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[7]?(data[7].transactionID):(" ")}</td>
            <td>{data[7]?(data[7].created_at):(" ")}</td>
            <td>{data[7]?(data[7].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[8]?(data[8].transactionID):(" ")}</td>
            <td>{data[8]?(data[8].created_at):(" ")}</td>
            <td>{data[8]?(data[8].type):(" ")}</td>
          </tr>
          <tr>
            <td>{data[9]?(data[9].transactionID):(" ")}</td>
            <td>{data[9]?(data[9].created_at):(" ")}</td>
            <td>{data[9]?(data[9].type):(" ")}</td>
          </tr>
      </Wrapper>
    </Packet>
  )
}



const Packet = styled.div`
  position: absolute;
  margin: 20px;

  left: 700px;
  width: 44%;
  top: 475px;

  a {
    font-size: 32px;
    color: navy;
  }
`


const Wrapper = styled.table`

  border-width: 2px;
  border-color: black;
  border-style: solid;
  font-size: 24px;
  table, th, td {
  border: 1px solid;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: dodgerblue;
    color: white;
  }

  td {
    padding-left: 15px;
    padding-right: 15px;
    height: 2ch;

  }

  tr:hover {
    background-color: silver;
  }
`
