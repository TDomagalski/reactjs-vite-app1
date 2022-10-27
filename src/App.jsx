import { createContext, useState } from 'react';
import favicon from '../public/img/favicon.svg';
import './styles/css/index.css';
import Navigation from './components/Navigation';

// import createContext hook from react and create <ThemeContext.Provider> and wrap whoal App function
export const ThemeContext = createContext(null);

function App() {
  // create useState hook to change light <-> dark
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    // function setTheme dark <-> light from useState hook
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    // function toggleTheme change value in theme variable
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* in id prop inject theme variable */}
      <div className="App" id={theme}>
        <div className="App_optionbar">
          <button
            type="submit"
            className="btn_theme"
            onClick={() => toggleTheme()}
          >
            <div className="btn_theme-circle" />
          </button>

          {/* <div className="btnTheme" onClick={() => toggleTheme()}>
						<span>
							Switch
							<br />
							Theme
						</span>
					</div> */}
        </div>
        <div className="App_main">
          <div id="App_navigation">
            <Navigation />
          </div>
          <div id="App_content">
            <h1>TomDom Corporation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              suscipit ab deserunt, fugit neque rem, dicta repellat veritatis,
              eius quam itaque similique magnam pariatur ut in alias nesciunt
              perspiciatis molestias! Quia ab est optio rem adipisci minus eaque
              reprehenderit, accusamus nisi? Tenetur tempora aperiam obcaecati
              fugiat. Adipisci perspiciatis repellat voluptate alias est enim,
              quae veritatis vel tempore ullam illum. Dolorum. Saepe qui
              praesentium porro, libero laudantium quidem quisquam quia?
              Recusandae fugit labore ad laborum! Veritatis impedit sunt
              consectetur totam voluptas nisi nulla fugit, esse corporis eaque
              aliquam qui alias amet? Minima, temporibus ipsum porro sapiente
              quos soluta quae odio, veniam quo architecto beatae iure,
              asperiores numquam eveniet praesentium vero cupiditate. Animi qui
              magni, nemo sequi omnis sed atque hic dolore! Ea sapiente incidunt
              nulla at id quo accusamus? Dolor perspiciatis adipisci quaerat,
              unde nulla molestias illo ullam corporis quos? Omnis veritatis
              nostrum obcaecati praesentium officiis eligendi voluptates sequi
              impedit perferendis? Itaque rerum in facere voluptas quo
              consequuntur et vitae, praesentium ratione nobis iste eveniet
              architecto quam illum neque minima. Id est neque debitis?
              Quibusdam, aliquid atque fuga nam fugiat obcaecati. Culpa officiis
              aliquid necessitatibus natus impedit aut inventore quibusdam
              excepturi quo. Numquam dolores aspernatur asperiores commodi ex
              hic velit quidem similique, repudiandae minus doloribus, sint
              explicabo animi molestias temporibus harum! Quidem libero
              voluptate aut consequatur quod beatae a, tenetur omnis culpa eius
              repudiandae, ut voluptatibus qui. Voluptatem, libero incidunt
              impedit consequatur vel labore! Tenetur modi dolore atque laborum
              aperiam odit. Voluptatum tempora pariatur earum accusamus ea
              consequatur id modi enim eum ut est aliquam quibusdam iure qui,
              quisquam architecto, voluptatem porro quis corporis? Voluptatibus
              harum vero tenetur explicabo ex dolorum? Eaque harum non quidem
              ipsa. Quas ea perspiciatis repudiandae repellendus, maiores iusto
              consequuntur, ullam quasi alias delectus reiciendis sunt officia
              mollitia reprehenderit obcaecati possimus iste vel vitae velit.
              Exercitationem, reiciendis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              suscipit ab deserunt, fugit neque rem, dicta repellat veritatis,
              eius quam itaque similique magnam pariatur ut in alias nesciunt
              perspiciatis molestias! Quia ab est optio rem adipisci minus eaque
              reprehenderit, accusamus nisi? Tenetur tempora aperiam obcaecati
              fugiat. Adipisci perspiciatis repellat voluptate alias est enim,
              quae veritatis vel tempore ullam illum. Dolorum. Saepe qui
              praesentium porro, libero laudantium quidem quisquam quia?
              Recusandae fugit labore ad laborum! Veritatis impedit sunt
              consectetur totam voluptas nisi nulla fugit, esse corporis eaque
              aliquam qui alias amet? Minima, temporibus ipsum porro sapiente
              quos soluta quae odio, veniam quo architecto beatae iure,
              asperiores numquam eveniet praesentium vero cupiditate. Animi qui
              magni, nemo sequi omnis sed atque hic dolore! Ea sapiente incidunt
              nulla at id quo accusamus? Dolor perspiciatis adipisci quaerat,
              unde nulla molestias illo ullam corporis quos? Omnis veritatis
              nostrum obcaecati praesentium officiis eligendi voluptates sequi
              impedit perferendis? Itaque rerum in facere voluptas quo
              consequuntur et vitae, praesentium ratione nobis iste eveniet
              architecto quam illum neque minima. Id est neque debitis?
              Quibusdam, aliquid atque fuga nam fugiat obcaecati. Culpa officiis
              aliquid necessitatibus natus impedit aut inventore quibusdam
              excepturi quo. Numquam dolores aspernatur asperiores commodi ex
              hic velit quidem similique, repudiandae minus doloribus, sint
              explicabo animi molestias temporibus harum! Quidem libero
              voluptate aut consequatur quod beatae a, tenetur omnis culpa eius
              repudiandae, ut voluptatibus qui. Voluptatem, libero incidunt
              impedit consequatur vel labore! Tenetur modi dolore atque laborum
              aperiam odit. Voluptatum tempora pariatur earum accusamus ea
              consequatur id modi enim eum ut est aliquam quibusdam iure qui,
              quisquam architecto, voluptatem porro quis corporis? Voluptatibus
              harum vero tenetur explicabo ex dolorum? Eaque harum non quidem
              ipsa. Quas ea perspiciatis repudiandae repellendus, maiores iusto
              consequuntur, ullam quasi alias delectus reiciendis sunt officia
              mollitia reprehenderit obcaecati possimus iste vel vitae velit.
              Exercitationem, reiciendis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              suscipit ab deserunt, fugit neque rem, dicta repellat veritatis,
              eius quam itaque similique magnam pariatur ut in alias nesciunt
              perspiciatis molestias! Quia ab est optio rem adipisci minus eaque
              reprehenderit, accusamus nisi? Tenetur tempora aperiam obcaecati
              fugiat. Adipisci perspiciatis repellat voluptate alias est enim,
              quae veritatis vel tempore ullam illum. Dolorum. Saepe qui
              praesentium porro, libero laudantium quidem quisquam quia?
              Recusandae fugit labore ad laborum! Veritatis impedit sunt
              consectetur totam voluptas nisi nulla fugit, esse corporis eaque
              aliquam qui alias amet? Minima, temporibus ipsum porro sapiente
              quos soluta quae odio, veniam quo architecto beatae iure,
              asperiores numquam eveniet praesentium vero cupiditate. Animi qui
              magni, nemo sequi omnis sed atque hic dolore! Ea sapiente incidunt
              nulla at id quo accusamus? Dolor perspiciatis adipisci quaerat,
              unde nulla molestias illo ullam corporis quos? Omnis veritatis
              nostrum obcaecati praesentium officiis eligendi voluptates sequi
              impedit perferendis? Itaque rerum in facere voluptas quo
              consequuntur et vitae, praesentium ratione nobis iste eveniet
              architecto quam illum neque minima. Id est neque debitis?
              Quibusdam, aliquid atque fuga nam fugiat obcaecati. Culpa officiis
              aliquid necessitatibus natus impedit aut inventore quibusdam
              excepturi quo. Numquam dolores aspernatur asperiores commodi ex
              hic velit quidem similique, repudiandae minus doloribus, sint
              explicabo animi molestias temporibus harum! Quidem libero
              voluptate aut consequatur quod beatae a, tenetur omnis culpa eius
              repudiandae, ut voluptatibus qui. Voluptatem, libero incidunt
              impedit consequatur vel labore! Tenetur modi dolore atque laborum
              aperiam odit. Voluptatum tempora pariatur earum accusamus ea
              consequatur id modi enim eum ut est aliquam quibusdam iure qui,
              quisquam architecto, voluptatem porro quis corporis? Voluptatibus
              harum vero tenetur explicabo ex dolorum? Eaque harum non quidem
              ipsa. Quas ea perspiciatis repudiandae repellendus, maiores iusto
              consequuntur, ullam quasi alias delectus reiciendis sunt officia
              mollitia reprehenderit obcaecati possimus iste vel vitae velit.
              Exercitationem, reiciendis!
            </p>
            <img src={favicon} alt="favicon" />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
