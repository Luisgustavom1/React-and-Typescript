import React from 'react';
import { Link } from 'react-router-dom';

import { ListHeaderStyle, ListStyle, ListTableStyle, TrStyle } from './styled';

const List: React.FC = () => {
  return(
    <ListStyle>
      <div>
        <ListHeaderStyle>
          <Link to='/'>
            <i className="fas fa-chevron-left"/>
          </Link>
          <h1>Empresas</h1>
        </ListHeaderStyle>
        <ListTableStyle>
            <thead>
              <tr>
                <th>Identificação</th>
                <th>Cidade/UF</th>
                <th>CEP</th>
                <th>Data de Abertura</th>
              </tr>
            </thead>
            <tbody>
              <TrStyle i={2}>
                <td>Facebook Inc.</td>
                <td>Curitiba/PR</td>
                <td>80.300-320</td>
                <td>08/2020</td>
                <td><i className="fas fa-chevron-circle-down"></i></td>
              </TrStyle>
              <TrStyle i={3}>
                <td>Facebook Inc.</td>
                <td>Curitiba/PR</td>
                <td>80.300-320</td>
                <td>08/2020</td>
                <td><i className="fas fa-chevron-circle-down"></i></td>
              </TrStyle>
              <TrStyle i={2}>
                <td>Facebook Inc.</td>
                <td>Curitiba/PR</td>
                <td>80.300-320</td>
                <td>08/2020</td>
                <td><i className="fas fa-chevron-circle-down"></i></td>
              </TrStyle>
            </tbody>
          </ListTableStyle>
      </div>
    </ListStyle>
  )
}

export default List;