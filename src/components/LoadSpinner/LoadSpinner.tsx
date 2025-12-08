import { TailSpin } from 'react-loader-spinner';
import type { JSX } from 'react';

const LoadSpinner = (): JSX.Element => {
  return (
    <div className="text-3xl text-center text-primary absolute top-30 left-1/2">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#ff2727"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default LoadSpinner;
