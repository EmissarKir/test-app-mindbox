import { FC } from "react";
import { IFilter } from "../../../types";
import { filterItems } from "../../../constants/filterItems.constants";
import { List } from "../../common/list";
import { FilterItem } from "../filterItem";
import { SFilterContainer, SLeftSide, SRightSide } from "./filter.style";
import { useTodos } from "../../../hooks/useTodos";

type FilterProps = {
  count: number;
};

export const Filter: FC<FilterProps> = ({ count }) => {
  const { filter, handleClearComplete, isCompleted, toggleFilter } = useTodos();
  return (
    <SFilterContainer>
      <SLeftSide>
        {count} {count > 1 ? "items" : "item"} left
      </SLeftSide>
      <List
        items={filterItems}
        direction={"row"}
        justify="center"
        renderItem={(item: IFilter) => (
          <FilterItem
            item={item}
            key={item.id}
            onFilter={toggleFilter}
            currentFilter={filter}
          />
        )}
      />
      <SRightSide onClick={handleClearComplete} isCompleted={isCompleted}>
        Clear completed
      </SRightSide>
    </SFilterContainer>
  );
};
