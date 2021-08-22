import React from 'react';
import { ListHeaderStyle, ListStyle, ListTableStyle } from './styled';

const List: React.FC = () => {
  return(
    <ListStyle>
      <div>
        <ListHeaderStyle>
          <i className="fas fa-chevron-left"></i>
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
              <tr>
                <td>Facebook Inc.</td>
                <td>Curitiba/PR</td>
                <td>80.300-320</td>
                <td>08/2020</td>
                <i className="fas fa-chevron-circle-down"></i>
              </tr>
            </tbody>
          </ListTableStyle>
      </div>
    </ListStyle>
  )
}

export default List;