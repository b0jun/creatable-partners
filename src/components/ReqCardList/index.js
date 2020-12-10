import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadReqCards } from '../../redux/reducers/reqCard';
import ReqCard from '../ReqCard';
import { CardWrapper } from './styles';

const ReqCardList = () => {
  const { reqCards } = useSelector((state) => state.reqCard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReqCards(''));
  }, []);

  return (
    <CardWrapper>
      {reqCards.map((card) => (
        <ReqCard key={card.id} card={card} />
      ))}
    </CardWrapper>
  );
};

export default ReqCardList;
