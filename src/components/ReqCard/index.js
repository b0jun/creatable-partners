import React from 'react';
import PropTypes from 'prop-types';
import {
  CardBlock,
  ColWrapper,
  TopWrapper,
  BottomWrapper,
  BtnWrapper,
  Botton,
} from './styles';

const ReqCard = ({ card }) => (
  <CardBlock>
    <TopWrapper>
      <div className="title">{card.title}</div>
      <div className="status">상담중</div>
    </TopWrapper>
    <div className="client item2">{card.client}</div>
    <div className="due item">{card.due}까지 납기</div>
    <div className="separator item2" />
    <BottomWrapper>
      <ColWrapper>
        <div>도면개수</div>
        <div>총 수량</div>
        <div>가공방식</div>
        <div>재료</div>
      </ColWrapper>
      <ColWrapper className="card-value">
        <div>{card.count}개</div>
        <div>{card.amount}개</div>
        <div>
          {card.method.map((m, i) => (i === card.method.length - 1 ? m : `${m}, `))}
        </div>
        <div>
          {card.material.map((m, i) => (i === card.material.length - 1 ? m : `${m}, `))}
        </div>
      </ColWrapper>
    </BottomWrapper>
    <BtnWrapper>
      <Botton isFill>요청 내역 보기</Botton>
      <Botton>채팅하기</Botton>
    </BtnWrapper>
  </CardBlock>
);

ReqCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    client: PropTypes.string,
    due: PropTypes.string,
    amount: PropTypes.number,
    count: PropTypes.number,
    status: PropTypes.string,
    material: PropTypes.arrayOf(PropTypes.any),
    method: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};
export default ReqCard;
