import styled from "styled-components"

export default function Header()
{
    return (

    <HeadElem>
        <Image>
            <img src="https://raw.githubusercontent.com/daus-s/ubeer/f544805e612b8f40e2dbbecf7231b6531b24d788/ubeer/logo.png" width="360"></img>
        </Image>
        <HeaderWrapper>
            <Links>
                <Elem as="a" href="/">Dashboard</Elem>
                <Elem as="a" href="/profile">Profile</Elem>
                <Elem as="a" href="/logs">Log</Elem>
                <Elem as="a" href="/drinks">Drinks</Elem>
            </Links>
        </HeaderWrapper>
    </HeadElem>)
}

const HeaderWrapper = styled.div`
    position: absolute;
    right: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    color: lightgray;
    display: inline-block;
    margin-top:0px !important;
`

const Links = styled.div`
    position: absolute;
    margin: 0px;
    right: 0px;
    top: 0px;
    font-size: 1.6rem;
    padding: 25px;
    background-color: midnightblue;

`

const Elem = styled.button`
    display: inline;
    color: white;
    margin-left: 15px;
    font-size: 30px;

    .a {
      color: white;
    }
    `
const Image = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
`

const HeadElem = styled.div`
    position: absolute;
    display: flex;
    left: 0px ;
    top: 0px;
    right: 0px;
    padding: 0px;
    margin: 0px;
    height: 80px;
`
