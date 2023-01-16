import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SplineScene } from '@portfolio/ui';
import { keyTypes } from './keyTypes';
import { Wrapper } from './Macropad.styles';

export default function Macropad(props) {
  const navigate = useNavigate();

  function onMouseDown(e) {
    const pathByKey = keyTypes
      .filter((k) => {
        return k?.key === e?.target?.name;
      })
      .map((k) => {
        return k?.path;
      });

    setTimeout(() => {
      navigate(pathByKey[0]);
    }, 300);
  }

  return (
    <Wrapper>
      <SplineScene
        scene='https://prod.spline.design/9o41SQ02NXESCCUs/scene.splinecode'
        onMouseDown={onMouseDown}
        {...props}
      />
    </Wrapper>
  );
}
