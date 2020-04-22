import styled from 'styled-components'

export default styled.div`
    margin-top: 10px;
    width: 250px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        border: 1px solid gray;
        outline: none;
    }
    .icons {
        width: 40px;
        display: flex;
        justify-content: space-between;
        &:hover {
            cursor: pointer;
        }
    }
`;