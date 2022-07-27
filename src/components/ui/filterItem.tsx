import styled, { css } from "styled-components";
import { FilterPropView, IFilter } from "../../types/index";

const SFilterItem = styled.div<{ isActive: boolean }>`
  margin-right: 1rem;
  padding: 0.25rem 0.3rem;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  ${({ isActive }) =>
    isActive &&
    css`
      border: ${({ theme }) => `1px solid ${theme.colors.accentDark}`};
    `}
  &:hover {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`;

type FilterItemProps = {
  item: IFilter;
  onFilter: (filter: FilterPropView) => void;
  currentFilter: FilterPropView;
};
export const FilterItem = ({
  item,
  onFilter,
  currentFilter,
}: FilterItemProps) => {
  const isActive = currentFilter === item.filterName;
  return (
    <SFilterItem onClick={() => onFilter(item.filterName)} isActive={isActive}>
      {item.name}
    </SFilterItem>
  );
};
