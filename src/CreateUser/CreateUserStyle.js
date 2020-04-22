import styled from 'styled-components'

export default styled.div`
    width: 250px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        height: 20px;
        border: 1px solid gray;
        border-radius: 5px;
        outline: none;
    }
    button {
        height: 24px;
        outline: none;
        background: #1E90FF;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        &:hover {
            background: #3333FF;
        }
    }
`;