import styled from "styled-components";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  direction?: string;
  justify?: string;
};

export function List<T>(props: ListProps<T>) {
  return <SList {...props}>{props.items.map(props.renderItem)}</SList>;
}
const SList = styled.ul<{ direction?: string; justify?: string }>`
  display: flex;
  flex-direction: ${({ direction = "column" }) => direction === "row" && "row"};
  justify-content: ${({ justify = "flex-start" }) =>
    justify === "center" && "center"};
`;
