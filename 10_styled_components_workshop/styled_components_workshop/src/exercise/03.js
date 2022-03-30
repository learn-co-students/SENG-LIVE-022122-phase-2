import styled from "styled-components";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 16px;
  padding: 16px;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  box-shadow: 2px 2px 4px black;
`;

// ✅ use the isEven prop in this component to change the background color for even rows!
// background: ${props => (props.isEven ? 'deeppink' : 'white')}
const ListItem = styled.li`
  padding: 4px 16px;
  background: ${props => {
    const divisibleBy3 = props.num % 3 === 0;
    const divisibleBy5 = props.num % 5 === 0;
    if (divisibleBy5 && divisibleBy3) {
      return 'lightgreen';
    } else if (divisibleBy3) {
      return 'aliceblue';
    } else if (divisibleBy5) {
      return 'lemonchiffon';
    } else {
      return 'white';
    }
  }};
`;

const items = [];
for (let i = 1; i < 100; i++) {
  items.push(i);
}

export default function List() {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem key={item} isEven={(index + 1) % 2 === 0} num={item}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
