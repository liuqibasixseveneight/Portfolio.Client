import React, { useState, Suspense } from 'react';
import { useTheme } from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

import { Wrapper } from './SplineScene.styles';

export default function SplineScene({
  loaderColor,
  onMouseDown = () => {},
  scene = '#',
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  const delaySceneLoad = setTimeout(() => {
    setIsLoading(false);
  }, 300);

  return (
    <Suspense>
      <Wrapper>
        {isLoading && <ThreeDots color={loaderColor ?? theme?.core?.['50']} />}

        {!isLoading && (
          <Spline
            onLoad={() => delaySceneLoad}
            scene={scene}
            onMouseDown={onMouseDown}
            {...props}
          />
        )}
      </Wrapper>
    </Suspense>
  );
}
