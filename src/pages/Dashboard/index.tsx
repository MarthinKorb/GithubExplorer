import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/45502466?s=460&v=4"
            alt="Marthin korb"
          />
          <div>
            <strong>MarthinKorb/Ecoleta</strong>
            <p>
              Aplicativo criado na Next Level Week da RocketSeat, que visa unir
              pontos de coleta seletiva com pessoas que querem descartar seus
              resíduos.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/45502466?s=460&v=4"
            alt="Marthin korb"
          />
          <div>
            <strong>MarthinKorb/Ecoleta</strong>
            <p>
              Aplicativo criado na Next Level Week da RocketSeat, que visa unir
              pontos de coleta seletiva com pessoas que querem descartar seus
              resíduos.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/45502466?s=460&v=4"
            alt="Marthin korb"
          />
          <div>
            <strong>MarthinKorb/Ecoleta</strong>
            <p>
              Aplicativo criado na Next Level Week da RocketSeat, que visa unir
              pontos de coleta seletiva com pessoas que querem descartar seus
              resíduos.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
