import React from "react";
import { Button } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useHistory } from "react-router-dom";

import useStyles from './style';

const Table = ({ data, deleteUser, setData }) => {
  const classes = useStyles();
  const history = useHistory();

  const redirect = (event, id) => {
    event.stopPropagation();
    history.push(`/user/${id}`);
  }

  const reorder = (list, startIndex, endIndex) => {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);

    return list;
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    verticalAlign: 'center',
    background: isDragging ? "lightgrey" : "#fff",
    ...draggableStyle
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
  });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      data,
      result.source.index,
      result.destination.index
    );

    setData({ result: items });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <table
            className={classes.table}
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <Draggable key={index} draggableId={String(index)} index={index}>
                  {(provided, snapshot) => (
                    <tr
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <td width="40px">
                        {item.avatar ?
                          <span onClick={(event) => redirect(event, item._id)}>
                            <img src={item.avatar} width="40px" height="40px" />
                          </span>
                          :
                          <span onClick={(event) => redirect(event, item._id)}>
                            <img src="/img/default-avatar.png" width="40px" height="40px" />
                          </span>
                        }
                      </td>
                      <td>
                        <span onClick={(event) => redirect(event, item._id)}>
                          {item.firstName}
                        </span>
                      </td>
                      <td>
                        <span onClick={(event) => redirect(event, item._id)}>
                          {item.lastName}
                        </span>
                      </td>
                      <td>
                        <span onClick={(event) => redirect(event, item._id)}>
                          {item.age}
                        </span>
                      </td>
                      <td align="right">
                        <Button danger onClick={() => deleteUser(item._id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )}
                </Draggable>
              ))}
            </tbody>
            <tfoot>
              {provided.placeholder}
            </tfoot>
          </table>
        )}
      </Droppable>
    </DragDropContext >
  );
};

export default Table;
