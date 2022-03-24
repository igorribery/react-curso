interface Props {
    data: {
        name: string;
        age: number;
    }
}

export const Pessoa = ( { data }: Props) => {

    return (
        <li> {data.name} -- {data.age} ANOS. </li>
    );
}