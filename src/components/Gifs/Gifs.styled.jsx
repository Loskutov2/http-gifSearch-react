import styled from "styled-components";

export const Search = styled.input`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    border: none;
    padding: 10px;
    &:focus{
        outline: none;
    }
`
export const SearchForm = styled.form`
    display: flex;
    align-items: center;
`
export const SearchBtn = styled.button`
    padding: 0;
    background: none;
    border: none;
    height: 40px;
`
export const List = styled.div`
    border-radius: 30px;
    margin-top: 20px;
    padding: 5px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
export const ListItem = styled.div`
    margin: 5px;
`