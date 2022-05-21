import styled from 'styled-components'
import Head from 'next/head'
import Dashboard from "../components/Dashboard"
import { supabase } from '../lib/supabase'
import { Auth, Typography, Button } from '@supabase/ui'

export default function Home() {
  // comes from our Auth UserContextProvider
  const { user } = Auth.useUser()

  return <Wrapper>
    <Head>
      <title> Ubeer </title>
    </Head>
      {/*
				* Check if user is logged in or not.
				* If not, display the login UI
				* If logged in, display the app
				* & pass the user in as props
				*/
        !user ? (
          <Content>
            <StyledAuth
              supabaseClient={supabase}
            />
            </Content>
        ) : (
          <Content>
            <Dashboard user={user} />
            <LogoutButton
              onClick={async () => {
                const { error } = await supabase.auth.signOut()
                if (error) console.log('Error logging out:', error.message)
              }}
            >
              Logout
            </LogoutButton>
          </Content>
        )}
  </Wrapper>
}

const StyledAuth = styled(Auth)`
  .sbui-btn {
    background-color: midnightblue;
  }

  label {
    color: blue;
  }

  .sbui-typography-link {
    color: blue;
  }
  .sbui-typography-text {
    color: white;
  }
`

const Wrapper = styled.div`
  padding: 0px;
`

const Content = styled.div`
  position: absolute;
  padding-top: 0px;
  width: 100%;
  right: 0px;
  left: 0px;

`

const LogoutButton = styled.button`
  position: fixed;
  width: 100%;
  background-color: lightgray;
  color: black;
  border-color: darkgray;
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 150px;
  bottom: 0px;
  right: 0px;
  `
