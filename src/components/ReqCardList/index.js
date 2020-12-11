import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadReqCards } from '../../redux/reducers/reqCard';
import Loading from '../Common/Loading';
import ReqCard from '../ReqCard';
import { CardWrapper, NoDataBlock } from './styles';

const ReqCardList = () => {
  const { reqCards, loadReqCardsLoading, filterdStatus } = useSelector(
    (state) => state.reqCard,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReqCards(filterdStatus));
  }, [filterdStatus]);

  if (reqCards.length === 0 && !loadReqCardsLoading) {
    return <NoDataBlock>조건에 맞는 견적 요청이 없습니다.</NoDataBlock>;
  }

  return (
    <>
      {loadReqCardsLoading ? (
        <Loading />
      ) : (
        <CardWrapper>
          {reqCards.map((card) => (
            <ReqCard key={card.id} card={card} />
          ))}
        </CardWrapper>
      )}
    </>
  );
};

export default ReqCardList;
