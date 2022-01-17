import React from 'react';
import S from './styles';

const Text = () => {
    return (
      <S.Text size={size} disabled={disabled} readOnly={readOnly}>
        <S.Input ref={ref} size={size} disabled={disabled} readOnly={readOnly} {...props} />
      </S.Text>
    );
  }
);

Text.defaultProps = {
  type: 'text',
  size: 'large',
};

export default Text;
