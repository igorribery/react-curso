import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: auto;

    background-color: blue;
    color: white;
    padding: 20px;
    
    span {
        font-weight: bold;
        color: #000;
    }

    .link {
        color: #FFF;

        &:hover {
            color: #FF0000;
        }
    }

    @media (max-width: 500px) {
        background-color: green;
        flex-direction: column;

        span {
            color: #FF0000;
        }
    }

`;

interface BotaocssProps {
    bg: string;
    small?: boolean;
}

export const Botaocss = styled.button<BotaocssProps>`
    font-size: ${props => props.small ? '10px' : '20px'};
    background-color: ${props => props.bg};
    padding: 20px;
`;