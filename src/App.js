import React, { useState } from "react";
import {i18n} from './translate/i18n';
import './App.css';

const I18N_STORAGE_KEY = 'i18nextLng';

const App =() => {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
  const handleSelectChange = event =>{
    window.localStorage.setItem(
      I18N_STORAGE_KEY, 
      event.target.value
    )
    window.location.reload();
  }
  return(
   
    <div className="App">
      <header className="App-header">

        <img src='https://www.logo.wine/a/logo/Friends/Friends-Logo.wine.svg' className="App-logo" alt="logo" />
      
        <h1>{i18n.t('titles.title')}</h1>

        <p><b class="fontRed">Chandler:</b> {i18n.t('messages.chandler')}</p>

        <p><b class="fontBlue">Rachel:</b>{i18n.t('messages.rachel')}</p>

        <p><b class="fontYellow">Phoebe:</b> {i18n.t('messages.phoebe1')}</p>

        <p><b class="fontRed">Jill:</b>{i18n.t('messages.jill')}</p>

        <p><b class="fontBlue">Phoebe:</b>{i18n.t('messages.phoebe2')}</p>
      </header>
      <div class="select-language">
        <p> Language:</p>
        <select onChange={handleSelectChange} value={language}>
          <option value="pt-BR">{i18n.t('messages.ptBr')}</option>
          <option selected value="en-US">{i18n.t('messages.enUs')}</option>
          <option value="fr-CA">{i18n.t('messages.frCa')}</option>
        </select>
      </div>


    </div>
   
  )
}
export default App;
