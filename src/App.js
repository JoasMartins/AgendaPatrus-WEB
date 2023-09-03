import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function App() {
  //document.title = "Agenda Patrus - Download"

  const handleDownload = () => {
    const apkFileName = 'AgendaPatrusTESTE.apk';
    const apkFilePath = process.env.PUBLIC_URL + '/' + apkFileName;

    const downloadLink = document.createElement('a');
    downloadLink.href = apkFilePath;
    downloadLink.download = apkFileName;
    downloadLink.click();
  };

  return (
    <div className="App">
      <head>
        
      </head>

      <header className="header">
        <a href='/' className="header_divIcon">
          <img src='agendapatrus_icon.png' alt='Ícone da Agenda Patrus' />
          <h1>Agenda Patrus</h1>
        </a>
      </header>

      <main>
        <div className='main'>
          <div className='main_areaTitle'>
            <h1 className='main_titleText'>Seja bem-vindo(a) ao<br />Agenda Patrus!</h1>
            <h2 className='main_subtitleText'>O aplicativo para organizar seus estudos na E. E. Sebastião Patrus de Souza</h2>
          </div>

          <div className='main_areaDownload'>
            <div>
              <h3>Clique no botão ao lado para iniciar o download do App.</h3>
              <p>Certifique-se de que nas configurações do seu dispositivo a opção esteja ativada. Não sabe como ativar? <a href='https://www.showmetech.com.br/instalando-aplicativos-android-de-fontes-desconhecidas/' target="_blank" rel="noopener noreferrer">Clique aqui</a>.</p>
            </div>
            <button onClick={handleDownload} className='main_buttonDownload'>
              <FontAwesomeIcon icon={faDownload} className='main_iconButton' />
              <div className='barraDivisoria' />
              <p className='textDownload'>Baixar</p>
            </button>
          </div>
          <p className='main_text'>Um aplicativo móvel de uso simples com um propósito único: ajudar na organização dos estudos e realização de tarefas da escola. Feito com as funções necessárias para que um aluno possa planejar suas atividades e matérias com antecedência.</p>
        </div>

        <div className='main_areaNotify'>
          <h3 className='main_titleNotify'>Sistema de Notificações</h3>
          <p className='main_textNotify'>Apelidado carinhosamente de MaiconNotify System, é o sistema de notificações da Agenda Patrus, criado para sempre avisar com antecedência sobre as tarefas programadas, para que você possa se preparar e não se esquecer delas. Confira abaixo como esse sistema funciona no aplicativo.</p>
          <p className='main_textNotify'>Sempre que o dia de uma tarefa estiver se aproximando, o sistema irá te avisar quantos dias restam para a data marcada. Por exemplo: Se a tarefa chamada "Trabalho de Matemática" estiver agendada para um determinado dia, quando faltar 3 dias para essa tarefa, e se a opção de avisar com 3 dias de antecedência estiver ativada em sua conta, o sistema irá te notificar sobre essa tarefa e outras que estejam próximas.</p>
          <p className='main_textNotify'>Vale ressaltar que o usuário terá a liberdade de escolher quantos dias antes deseja ser notificado, e essas configurações podem ser ajustadas conforme sua preferência.</p>
          <p className='main_'>Confira as opções:</p>
          <ul>
            <li>Quando uma tarefa for criada;</li>
            <li>Todos os dias as 04h listar as tarefas do dia;</li>
            <li>Tarefas que estão restando 1 dia;</li>
            <li>Tarefas que estão restando 2 dias;</li>
            <li>Tarefas que estão restando 3 dias;</li>
            <li>Tarefas que estão restando 4 dias;</li>
            <li>Tarefas que estão restando 5 dias;</li>
            <li>Tarefas que estão restando 6 dias;</li>
            <li>Tarefas que estão restando 7 dias;</li>
            <li>Tarefas que estão restando 10 dias.</li>
          </ul>
        </div>

        <div className='main_areaInfo'>
          <div>
            <a>!</a>
            <h3>Aviso</h3>
          </div>
          <p className='destaque'>Este aplicativo não foi criado nem solicitado pela equipe da secretaria ou direção da escola!</p>
          <p className='nao_destaque'>Portanto, quaisquer erros, falhas ou problemas no aplicativo não devem ser reportados a eles, mas sim ao desenvolvedor do aplicativo.</p>
        </div>
      </main>





      <footer>
        <div className='footer'>
          <div className='logo'>
            <div>
              <img src='agendapatrus_icon.png' alt='Ícone da Agenda Patrus' />
              <h1>Agenda Patrus</h1>
            </div>
            <p>Suas tarefas, sua organização.</p>
          </div>

          <div className='contact-dev'>
            <h2>Contato do<br/>desenvolvedor</h2>
            <div className='barraDivisoriaHorizontal' />
            <div className='list'>
              <ul className='key'>
                <li>Email:</li>
                <li>Instagram:</li>
                <li>Turma:</li>
              </ul>

              <ul className='value'>
                <a href='mailto:joasmcarmo@gmail.com?subject=Agenda Patrus&body=' target='_blank'>joasmcarmo@gmail.com</a>
                <a href='https://www.instagram.com/joas_mc_/' target='_blank'>@joas_mc_</a>
                <a>2MB</a>
              </ul>
            </div>
          </div>

          <div className='contact-school'>
            <h2>Contato<br/>da escola</h2>
            <div className='barraDivisoriaHorizontal' />
            <div className='list'>
              <ul className='key'>
                <li>Email:</li>
                <li>Instagram:</li>
                <li>Endereço:</li>
              </ul>

              <ul className='value'>
                <a href='mailto:secretaria.patrus@gmail.com?subject=&body=' target='_blank'>secretaria.patrus@gmail.com</a>
                <a href='https://www.instagram.com/patrusdesousa/' target='_blank'>@patrusdesousa</a>
                <a href='https://www.google.com/maps/dir/-21.6954784,-43.329796/e.+e.+sebastiao+patrus+de+souza/@-21.7167481,-43.3660129,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x989d80dfb541c3:0x71cc1dd30d350e4!2m2!1d-43.361005!2d-21.7425862?entry=ttu' target='_blank'>Abrir em Google Maps</a>
              </ul>
            </div>
          </div>

          <div className='creditos'>
            <p className='dev'>Desenvolvido por <span>Joás M. C.</span> da turma <span>2MB</span>.</p>
            <p className='love'>Feito com ❤️ para a <span>SPS</span>!</p>
          </div>
        </div>

        <div className='footer-copyright'>
          © 2023 todos os direitos reservados
        </div>
      </footer>

    </div>
  );
}

export default App;