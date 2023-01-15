import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import { useNavigate } from 'react-router-dom';

import { keyTypes } from './keyTypes';
import { Wrapper } from './Macropad.styles';

export default function Macropad(props) {
  const navigate = useNavigate();

  function onMouseDown(e) {
    const pathByKey = keyTypes
      .filter(function (k) {
        return k?.key === e?.target?.name;
      })
      .map(function (k) {
        return k?.path;
      });

    setTimeout(() => {
      navigate(pathByKey[0]);
    }, 300);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper>
        <Spline
          scene='https://prod.spline.design/9o41SQ02NXESCCUs/scene.splinecode'
          onMouseDown={onMouseDown}
          {...props}
        />
      </Wrapper>
    </Suspense>
  );
}
