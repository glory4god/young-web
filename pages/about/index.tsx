import Link from 'next/link';
import React, { useCallback, useEffect, useRef } from 'react';

import { Footer, WheelLayout } from '@components/common';
import { GlassmorphismBox } from '@components/ui';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setBgColor } from '@lib/redux/slices/globalSlice';

const AboutPage = () => {
  const [imageNumber, setImageNumber] = React.useState(1);
  const dispatch = useDispatch();
  // 칼라리스트
  const colors = ['black', 'black', 'white', 'white', 'white'];

  useEffect(() => {
    dispatch(setBgColor(colors[0]));
  }, []);
  return (
    <>
      <WheelLayout colors={colors}>
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="소 개">
            <span>이&emsp;름 : 유하영</span>
            <div>
              <span>나&emsp;이 : 27살</span>
              <span>생년월일 : 1996년 8월 14일</span>
            </div>
            <span>주&emsp;소 : 서울시 관악구</span>
            <span>직&emsp;업 : 프론트엔드 개발자</span>
            <div>
              <span>학&emsp;력 : 인하대학교</span>
              <span>전&emsp;공 : 에너지자원공학과 (수학과 복수전공)</span>
            </div>

            <div>
              <span>이메일 : gkduddy0814@gmail.com</span>
              <span>연락처 : 010-7721-2703</span>
            </div>
            <span>
              블로그 : &nbsp;
              <Link href="https://blog.naver.com/glory4god">
                <a className=" text-blue-500">
                  <b>링크(클릭)</b>
                </a>
              </Link>
            </span>
            <span>
              깃허브 : &nbsp;
              <Link href="https://github.com/glory4god">
                <a className=" text-blue-500">
                  <b>링크(클릭)</b>
                </a>
              </Link>
            </span>
            <span>
              노&emsp;션 : &nbsp;
              <Link href="https://fixed-mask-ed8.notion.site/0b27ae675de341ff9214c21f8b846826https://github.com/glory4god">
                <a className=" text-blue-500">
                  <b>링크(클릭)</b>
                </a>
              </Link>
            </span>
          </GlassmorphismBox>
        </div>
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="">
            <div>
              <span>
                주사기 - <span>(주식하는 사람들의 이야기)</span> <br />
                <span>2021.05 ~ 2021.8 ( 4개월 )</span>
              </span>
              <span>
                담당 - <span>프론트엔드 / 백엔드 ( 개인 )</span>
                <br />
                내용 -{' '}
                <span>
                  주식 관련 조건에 맞는(시가, 종가, 고가, 저가, 날짜) 차트 제공
                  / 키워드 기반 뉴스 검색으로 데이터 제공 / 커뮤니티 게시판으로
                  정보교환 가능
                </span>
                <br />
                경력기술서 -{' '}
                <span>
                  <a href="#">링크(클릭)</a>
                </span>
              </span>
            </div>
            <div>
              <span>
                인스타그램 클론 코딩
                <br />
                <span>2021.09 ~ 2022.01 ( 4개월 )</span>
              </span>
              <span>
                담당 - <span>프론트엔드 & 백엔드 ( 팀원 1명 )</span> <br />
                내용 - <span>asdasdadsadsaasd</span> <br />
                경력기술서 - <a href="#">링크(클릭)</a>
              </span>
            </div>
            <div>
              <span>
                수학학원 학력 관리 시스템
                <br />
                <span>2021.09 ~ 2022.01 ( 4개월 )</span>
              </span>
              <span>
                담당 - <span>프론트엔드 & 백엔드 ( 개인 )</span> <br />
                내용 - <span>asdasdadsadsaasd</span> <br />
                경력기술서 - <a href="#">링크(클릭)</a>
              </span>
            </div>
          </GlassmorphismBox>
        </div>
        <div className={cn('')}>HAYOUNG profile4</div>
        <Footer />
      </WheelLayout>
    </>
  );
};

export default AboutPage;
