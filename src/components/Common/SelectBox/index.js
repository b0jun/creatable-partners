import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IoCaretDownOutline } from 'react-icons/io5';
import { SelectWrapper, SelectBoxBlock, CheckList } from './styles';
import {
  deselectedMaterial,
  deselectedMethod,
  selectedMaterial,
  selectedMethod,
} from '../../../redux/reducers/reqCard';

const SelectBox = ({ name, items }) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const dispatch = useDispatch();
  const onShowClick = () => {
    setIsShow(!isShow);
  };

  const onSelectedFilter = ({ target }) => {
    if (target.checked) {
      setSelectedFilter(selectedFilter.concat(target.value));
      if (name === '가공방식') {
        dispatch(selectedMethod(target.value));
      } else {
        dispatch(selectedMaterial(target.value));
      }
    } else {
      setSelectedFilter(selectedFilter.filter((item) => item !== target.value));
      if (name === '가공방식') {
        dispatch(deselectedMethod(target.value));
      } else {
        dispatch(deselectedMaterial(target.value));
      }
    }
  };
  return (
    <SelectWrapper>
      <SelectBoxBlock isSelected={selectedFilter.length !== 0} onClick={onShowClick}>
        <span>
          {selectedFilter.length === 0 ? name : `${name}(${selectedFilter.length})`}
        </span>
        <IoCaretDownOutline />
      </SelectBoxBlock>
      {isShow && (
        <CheckList>
          {items.map((item) => (
            <div key={item}>
              <input
                value={item}
                type="checkbox"
                checked={selectedFilter.indexOf(item) !== -1}
                onChange={onSelectedFilter}
              />
              <li>{item}</li>
            </div>
          ))}
        </CheckList>
      )}
    </SelectWrapper>
  );
};

SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default SelectBox;
