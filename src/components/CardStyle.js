import styled from 'styled-components';


const Div = styled.div`
    display: flex;
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    box-shadow: 12px 14px 17px -12px rgba(125,124,125,1);
    cursor: pointer;
    background-color: ${({seleccionada}) => seleccionada ? '#ffffff' : '#BAB9BD'};
    border: solid 1px ${({seleccionada}) => seleccionada ? '#000000' : '#BAB9BD'};
    color: #000000;

    &:active {
        background-color: blue;
    }
    &:hover {
        background-color: #EBEAEC;
        border: solid 1px #000000;
    }
    .nombrePeli {
        text-align: -webkit-center;
        cursor: pointer;
        color: #000000;
    }
    .delete {
        position: absolute;
        background-color: #c30000;
        border-radius: 0 10px 0 10px;
        right: 0;
        top: -1px;
        border: 0;
        height: 20px;
        font-size: x-small;
        font-weight: bold;
    }
    .delete:hover {
    background-color: red;
    }
`;

export default Div;