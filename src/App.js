import './App.css';
import Card from './card/Card';
import Data from './db.json';

function App() {
  return (
    <div className="App">
      {
        Data.map((d) => (
          <Card 
          key={d.id}
            id={d.id} 
            date={d.date} 
            title={d.title} 
            content={d.content}
            imageB={d.thumbnail.large}
            imageS={d.thumbnail.small}
            name={d.author.name}
            avatar={d.author.avatar}
            role={d.author.role}
          />
        ))
      }
    </div>
  );
}

export default App;
// sx