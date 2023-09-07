'use client';
import { useEffect } from 'react';
import { useBoardStore } from '@/store/BoardStore';
import {DragDropContext,Droppable} from 'react-beautiful-dnd';
import { get } from 'http';

// import React from 'react'

function Board() {
  const getBoard=useBoardStore((state) => state.getBoard);


  useEffect(() => {
    getBoard();

  },[getBoard]);

  return (
    <h1>Hello</h1>
  // <DragDropContext>
  //   <Droppable droppableId='board' direction='horizontal' type='column'>
  //       {(provided) => (
  //           <div>
  //               {/* rendering all the columns */}
  //           </div>

  //       )}

  //   </Dropabble>
  // </DragDropContext>
  );  
}

export default Board
