import React, { useRef } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const HorizontalScroller: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onWheel = (e: React.WheelEvent) => {
    const el = ref.current;
    if (!el) return;

    if (!e.shiftKey) {
      el.scrollLeft += e.deltaY;
    }
  };

  return (
    <>
      <div
        ref={ref}
        onWheel={onWheel}
        style={{ touchAction: 'pan-x' }}
        className="
       scrollbar scroll-smooth flex gap-60 overflow-x-auto overflow-y-hidden py-3 px-4 overscroll-contain scrollbar-hide absolute top-50 left-0 text-center right-0"
      >
        {children}
        
        <Button>
          <Link to={'movies'} className='p-3 h-full'>MORE</Link>
        </Button>
       
      </div>
    </>
  );
};

export default HorizontalScroller;
