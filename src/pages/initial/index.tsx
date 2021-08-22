import React from 'react';
import { ContentStyle } from './styled';

import img1 from '../../assets/img/home_work.svg';
import img2 from '../../assets/img/storefront.svg';
import { Link } from 'react-router-dom';
const InitialPage: React.FC = () => {
  return(
    <ContentStyle>
      <h2>Início</h2>
      <section>
        <Link to='/list'>
          <img src={img1} alt='icon grande 1'></img>
          <p>Listar empresas</p>
        </Link>
        <Link to='./add'>
          <img src={img2} alt='icon grande 2'></img>
          <p>Cadastrar empresas</p>
        </Link>
      </section>
    </ContentStyle>
  )
}

export default InitialPage;