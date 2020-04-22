import styled from 'styled-components'

export default styled.div`
    margin-top: 10px;
    width: 250px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icons {
        width: 40px;
        display: flex;
        justify-content: space-between;
        .edit {
            color: gray;
        }
        .delete {
            color: red;
        }
        &:hover {
            cursor: pointer;
        }
    }
`;