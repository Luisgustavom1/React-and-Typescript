import React from 'react';
import { AsideStyle, IconOne, IconContainer } from './styled';

import img1 from '../../assets/img/Shape.svg';
import img2 from '../../assets/img/home_work.svg';
import img3 from '../../assets/img/Vector.svg';

const Aside: React.FC = () => {
  return(
    <AsideStyle>
      <IconOne>
        <div>
          <img src={img1} alt='icon 1'/>
        </div>
        <aside></aside>
      </IconOne>
      <IconContainer>
        <img src={img2} alt='icon 2'></img>
      </IconContainer>
      <IconContainer>
        <img src={img3} alt='icon 3'></img>
      </IconContainer>
    </AsideStyle>
  )
}

export default Aside;