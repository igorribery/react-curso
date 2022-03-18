interface Props {
 
  title?: string;    // ? faz a prop ser opcional

}

export const Header = ({ title }: Props) => {
    return (
      <header>
        <h1>{title}</h1>
        <hr />
      </header>
    );
}



