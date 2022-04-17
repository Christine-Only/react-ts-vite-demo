import { useRef, useEffect } from 'react';
import img from '../../assets/imgs/dongao.png';

const LazyLoad = () => {
  const imgRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const domRect = imgRef?.current?.getBoundingClientRect();
    console.log('domRect: ', domRect);
    const { clientHeight } = document.documentElement;
    console.log('clientHeight: ', clientHeight);
  }, []);
  return <img ref={imgRef as any} src={img} alt="dongao" />;
};

export default LazyLoad;
