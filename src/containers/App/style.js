import styled from "styled-components"

export const AppWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    width: 100vw;
`

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-rows: 60px 607px;
    height: 667px;
    width: 375px;
    border: 1px solid black;
`

export const RouterWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #f7f7f7;
    overflow-y: scroll;
`