import { NextPage } from 'next';
import React, { useRef } from 'react';

import { Footer, WheelLayout } from '@components/common';

import cn from 'classnames';
import { GlassmorphismBox } from '@components/ui';
import Link from 'next/link';

const Home: NextPage = () => {
  const [imageNumber, setImageNumber] = React.useState(1);
  const timer = useRef(null);

  const changeImage = React.useCallback(() => {
    if (imageNumber < 2) {
      setImageNumber((prev) => prev + 1);
    } else {
      setImageNumber(1);
    }
  }, [imageNumber]);

  // 칼라리스트
  const colors = ['white', 'black', 'black', 'black', 'red', 'white'];

  React.useEffect(() => {
    timer.current = setInterval(changeImage, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [imageNumber]);

  return (
    <>
      <WheelLayout colors={colors}>
        <div
          style={{
            backgroundImage: `url('test${imageNumber}.jpg')`,
          }}></div>

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
          <GlassmorphismBox title="경 력">
            <div>
              <span>
                YDNS <br />
                <span>2021.08 ~ 2021.12 ( 5개월 )</span>
              </span>
              <span>
                <br />
                직무 - <span>프론트엔드 개발 리드</span>
                <br />
                업무 - <span>환경부 정책지원 서비스</span> <br />
                경력기술서 -{' '}
                <span>
                  <a href="#">링크(클릭)</a>
                </span>
              </span>
            </div>
            <div>
              <span>
                잉카인터넷 <span>(신사업팀)</span>
                <br />
                <span>2022.01 ~</span>
              </span>
              <span>
                <br />
                직무 - <span>프론트엔드 & 웹 개발자</span> <br />
                업무 - <span>커머스 백오피스 & 홈페이지 리뉴얼 개발</span>{' '}
                <br />
                경력기술서 -{' '}
                <span>
                  <a href="#">링크(클릭)</a>
                </span>
              </span>
            </div>
          </GlassmorphismBox>
        </div>
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="개인 프로젝트">
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

export default Home;
