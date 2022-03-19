import {ReactNode} from 'react';

interface Props {
    legend: string;
    children: ReactNode;
}

export const Photo = ({legend, children}: Props) => {
    return (
        <>
             {children}
            <p>{legend}</p>
        </>
    )
}