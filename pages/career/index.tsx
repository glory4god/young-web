import React, { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';

import { Footer, WheelLayout } from '@components/common';
import { GlassmorphismBox } from '@components/ui';
import cn from 'classnames';
import { setBgColor } from '@lib/redux/slices/globalSlice';
import { useDispatch } from 'react-redux';

const CareerPage = () => {
  const [imageNumber, setImageNumber] = React.useState(1);
  const dispatch = useDispatch();

  // 칼라리스트
  const colors = ['black', 'black', 'black', 'black'];

  useEffect(() => {
    dispatch(setBgColor(colors[0]));
  }, []);
  return (
    <>
      <WheelLayout colors={colors}>
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="경 력">
            <div>
              <span>
                YDNS <br />
                <span>2021.08 ~ 2021.12 ( 5개월 )</span>
              </span>
              <span>
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
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="지나온 길">
            <div>
              <span>
                수학 강사 - <span>(솔잎샘 수학학원)</span> <br />
                <span>보조강사 1년 / 정규강사 3년 반</span>
              </span>
              <span>
                담당 - <span>중1 ~ 고3 정규 수업</span>
                <br />
                성과 -{' '}
                <span>
                  4~5등급을 2등급으로 향상 <br />
                  광신, 미림, 남강, 신림고 수학 1등급 매학기 배출 <br />
                </span>
              </span>
            </div>
            <div>
              <span>
                수학 강사 - <span>(교신 학원)</span> <br />
                <span>고3 강의 9개월</span>
              </span>
              <span>
                담당 - <span>기하와벡터 내신 / 수1 수2 수능 대비 </span> <br />
                성과 -{' '}
                <span>
                  40~50등 10등 안으로, 80~100등 20~30등 안으로 향상 <br />
                  모의고사 3~4등급에서 2등급으로 향상
                </span>
              </span>
            </div>
            <div>
              <span>
                수학 과외
                <br />
                <span>평균 6~12개월 5 ~ 6명</span>
              </span>
              <span>
                담당 - <span>중등, 고2, 고3 과외</span> <br />
                성과 - <span></span>
              </span>
            </div>
            <div>
              <span>
                웹 프로그래밍 독학
                <br />
                <span>2021.2 ~ </span>
              </span>
              <span>
                담당 - <span>프론트엔드 & 백엔드 ( 개인 )</span> <br />
                내용 -{' '}
                <span>
                  Career 란에 경력, 개인프로젝트, 팀프로젝트가 있습니다.
                </span>
              </span>
            </div>
          </GlassmorphismBox>
        </div>
        <Footer />
      </WheelLayout>
    </>
  );
};

export default CareerPage;
