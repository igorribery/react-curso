import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
}

export const Container = styled.div<ContainerProps>`
background-color: ${props => props.bgColor};
color: white;
padding: 20px
`;

interface BotaocssProps {
    bg: string;
    small?: boolean;
}

export const Botaocss = styled.button<BotaocssProps>`
font-size: ${props => props.small ? '15px' : '30px' };
background-color: ${props => props.bg};
margin-left: 10px;
`;