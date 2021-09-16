import { stringify } from 'querystring';
import React from 'react';
import { TodoItemModel } from './Models/TodoItemModel';

export interface TodoItemProps {
  item: TodoItemModel;
  onDescriptionChanged: (description: string) => void;
  onDoneClick: () => void;
}

export function TodoItemListItem(props: TodoItemProps) {
  const { item, onDescriptionChanged, onDoneClick } = props;

  function handleDescriptionChanged(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    onDescriptionChanged(e.target.value);
  }

  function handleDoneChanged(e: React.ChangeEvent<HTMLInputElement>) {
    onDoneClick();
  }

  return (
    <li>
      <input type="text" value={item.description} onChange={handleDescriptionChanged} />
      <input type="checkbox" checked={item.done} onChange={handleDoneChanged} />Done
    </li>
  );
}
