import { stringify } from 'querystring';
import React from 'react';
import { TodoItemModel } from './Models/TodoItemModel';

export interface TodoItemProps {
  item: TodoItemModel;
}

export function TodoItemListItem(props: TodoItemProps) {
  const { item } = props;

  return (
    <li>
      <input type="text" value={item.description} />
      <input type="checkbox" checked={item.done} />Done
    </li>
  );
}
