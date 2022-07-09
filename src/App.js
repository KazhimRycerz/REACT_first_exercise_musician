import './App.scss';
import daten from './daten.js'

function App() {
  const artists = daten.map((artist, index) => {
    return (
      <div key={index} className="card m-5 myCard">
       <img className="card-img-top" src={artist.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{artist.cardTitle}</h5>
          <p className="card-text">{artist.cardDescription}</p>
          <a href={artist.button.url} className="btn btn-primary btn-condor" target="_blank">{artist.button.label}</a>
        </div>
      </div>     
    )
  })
  
return (

<body>
  <header></header>
  <main id="main">
    <h1>Historic artists of music</h1>   
    <div className="kartensammlung">
      {artists}
    </div>
  </main>
</body>
)

}
export default App