import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { useDispatch } from 'react-redux';

import { filterItem } from '../../config/config';
import SelectBox from '../Common/SelectBox';
import { FilterBlock } from './styles';
import { toggleStatus } from '../../redux/reducers/reqCard';

const Filter = () => {
  const [isOn, setIsOn] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setIsOn(e.target.checked);
    if (!isOn) {
      dispatch(toggleStatus('상담중'));
    } else {
      dispatch(toggleStatus());
    }
  };
  return (
    <FilterBlock>
      <div className="wrapper top">
        <SelectBox name={filterItem.method.name} items={filterItem.method.item} />
        <SelectBox name={filterItem.material.name} items={filterItem.material.item} />
      </div>
      <div className="wrapper">
        <Switch
          checked={isOn}
          onChange={handleChange}
          color="primary"
          name="status"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <p>상담 중인 요청만 보기</p>
      </div>
    </FilterBlock>
  );
};
export default Filter;
