import './App.css';
import Herobox from './components/Herobox';
import AntiHeroes from './components/AntiHeroeBox';

const App = () => {
  return (
    <div className="App">
      <AntiHeroes
        className="Anti-Hero-Joker"
        name="Arthur Fleck"
        antiHeroe="Joker"
        photo="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joker-joaquin-phoenix-heroe-villano-1567430480.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=480:*"
      />


      <Herobox className="Hero-Superman" name="Clark" heroName="Superman">
        <h2>Biografia de Superman</h2>
        <img alt="Superman" src="https://static.independent.co.uk/2020/09/25/10/henry-cavill-justice-league.jpg?width=1200" />
        <p>
          Superman (en español: Superhombre) es un superhéroe ficticio que apareció por primera vez en los cómics estadounidenses publicados por DC Comics.1​2​3​4​El personaje fue creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio.
          Sus creadores lo vendieron a Detective Comics, Inc. en 1938 por 130 dólares5​ y la primera aventura del personaje fue publicada en Action Comics #1 (junio de 1938), para luego aparecer en varios seriales de radio, programas de televisión, películas, tiras periódicas y videojuegos. Con el éxito de sus aventuras, este personaje definió al superhéroe y estableció su primacía dentro del cómic estadounidense.1​ Su apariencia del personaje es distintiva y se volvió icónica: un traje azul y rojo, con una capa y un emblema con una letra “S” estilizada en su pecho,6​7​8​ el cual se ha convertido en un símbolo del personaje.9
        </p>
        <a href="https://es.wikipedia.org/wiki/Superman">Superman</a>
      </Herobox>

      <Herobox className="Hero-Mujer-Maravilla" name="Diana" heroName="WonderWoman">
        <h2>Biografia de Wonder Woman</h2>
        <img alt="Wonder Woman" src="http://pm1.narvii.com/6750/ae10b3b575304cb0a73e539c62706bcd39828ce0v2_00.jpg" />
        <p>
          La Mujer Maravilla (en inglés: Wonder Woman) es una superheroína ficticia creada por William Moulton Marston para la editorial DC Comics. Es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega. En su tierra natal es conocida como la princesa Diana de Temiscira pero fuera de esta utiliza la identidad secreta de Diana Prince. Está dotada de una amplia gama de poderes superhumanos y habilidades de combate de batalla superiores, gracias a sus dones obtenidos de los dioses y su amplio entrenamiento.
        </p>
        <a href="https://es.wikipedia.org/wiki/Mujer_Maravilla">Wonder Woman</a>
      </Herobox>

      <Herobox className="Hero-Batman" name="Bruce" heroName="Batman">
        <h2>Biografia de Batman</h2>
        <img alt="Batman" src="https://www.cinemascomics.com/wp-content/uploads/2020/12/batman-de-ben-affleck.jpg" />
        <p>
          Batman (conocido inicialmente como Bat-Man y en español como el Hombre Murciélago) es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger,13​ y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.
        </p>
        <a href="https://es.wikipedia.org/wiki/Batman">Batman</a>
      </Herobox>


    </div>
  );
}

export default App;
