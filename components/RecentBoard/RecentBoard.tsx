import cn from 'classnames';
import React, { useRef, useState } from 'react';

import s from './RecentBoard.module.css';

interface IBoard {
  title: string;
  imageUrl: string;
  content: string;
}

const RecentBoard = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<IBoard>();
  const modalRef = useRef<HTMLDivElement>();

  const boards: IBoard[] = [
    { title: 'title1', imageUrl: 'main_2.jpg', content: 'content1' },
    { title: 'title2', imageUrl: 'main_3.jpg', content: 'content2' },
    { title: 'title3', imageUrl: 'main_4.jpg', content: 'content3' },
    { title: 'title4', imageUrl: 'main_5.jpg', content: 'content4' },
    { title: 'title5', imageUrl: 'main_4.jpg', content: 'content5' },
    { title: 'title6', imageUrl: 'main_5.jpg', content: 'content6' },
    { title: 'title7', imageUrl: 'main_2.jpg', content: 'content17' },
  ];

  return (
    <div className={cn(s.root)}>
      <div className={s.header}>
        <div className={s.box}>영억1</div>
        <div className={s.box}>영역2</div>
      </div>
      {/* <div className={cn(s.wrap, 'flex space-x-4')}>
        <button className={s.title}>메뉴 1</button>
        <button className={s.title}>메뉴 2</button>
      </div> */}
      {/* <div className={s.body}>
        {boards.map((board) => {
          return (
            <div
              key={board.title}
              onClick={() => {
                console.log('보드 오버');
                setIsModalShow(true);
                setSelectedBoard(board);
              }}
              className={s.imageBox}
              style={{
                backgroundImage: `url('${board.imageUrl}')`,
              }}></div>
          );
        })}
      </div> */}
      {isModalShow && (
        <div
          ref={modalRef}
          onMouseLeave={() => {
            console.log('모달 리브');
            setIsModalShow(false);
          }}
          className={cn(s.modal)}>
          <div
            className={s.image}
            style={{
              backgroundImage: `url('${selectedBoard.imageUrl}')`,
            }}
          />
          <div className={s.contents}>
            <h2>제목 : {selectedBoard?.title}</h2>
            <h3>작성일 : 2022.02.13</h3>
            <h3>내용 - </h3>
            <p dangerouslySetInnerHTML={{ __html: selectedBoard?.content }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentBoard;
