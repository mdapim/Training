import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import { Translator, Translate } from 'react-auto-translate';

const langs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'French' },
};

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className='App'>
      <header className='App-header'>
        <label htmlFor='language'>Choose a language:</label>
        {Object.keys(langs).map((lng) => (
          <button
            onClick={() => {
              i18n.changeLanguage(lng);
            }}
            value={lng}
          >
            {lng}
          </button>
        ))}
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <Trans i18nKey='description'>
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('learn')}
        </a>
        <p>{t('new.key', 'this will be auto added')}</p>
      </header>
    </div>
  );
}

export default App;
