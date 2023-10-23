import logo from './logo.svg'
import './App.css'
// se volessi far apparire il componente Stefano nella pagina, devo inserirlo nell'attuale
// componente che viene montato nel DOM, ovvero App!
import Stefano from './Stefano' // il .jsx non serve
import Footer from './components/Footer' // il .jsx non serve
// ora importo il componente a classe
import MyClassComponent from './components/MyClassComponent'
import WelcomeMessage from './components/WelcomeMessage'
import WelcomeMessageClass from './components/WelcomeMessageClass'

// la nomenclatura consigliata per i componenti React è la PascalCase (anche l'iniziale va maiuscola!)
function App() {
  return (
    // Questo si chiama JSX, una sintassi molto simile ad HTML
    // differenze da HTML:
    // 1) possiamo ritornarlo dalle funzioni
    // 2) "class" diventa "className" per indicare le classi CSS per i tag
    // 3) JSX è molto più potente di HTML e ci permette di utilizzare le variabili in modi più furbi
    <div className="App">
      <header className="App-header">
        <WelcomeMessage welcomeName="Stefano" />
        <WelcomeMessage welcomeName="Mohamed" />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="main-text">Ciao EPICODE! Prima app con React!</p>
        <Stefano />
      </header>
      <WelcomeMessage welcomeName="Lorenzo" />
      <WelcomeMessage welcomeName="Pierpaolo" />
      <WelcomeMessageClass welcomeName="Noemi" />
      <MyClassComponent />
      <Footer />
    </div>
  )
}

export default App

// PROPS
// Le PROPS sono delle parti parametrizzabili di un componente
// È possibile riutilizzare uno stesso componente tante volte, adattandolo alle nostre esigenze
