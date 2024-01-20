import './index.css';
import { CurrencyConverter,PasswordGenerator,BgChanger,Counter,Layout,ROUTES_CONFIG, MyGit,githubInfoLoader, Game, TextUtils} from './ImportExport';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';



function App() {



  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES_CONFIG.HOME} element={<Layout />}>
      <Route path={ROUTES_CONFIG.EMPTY} element={<CurrencyConverter />} />
      <Route path={ROUTES_CONFIG.COUNTER} element={<Counter />} />
      <Route path={ROUTES_CONFIG.BG_CHANGER} element={<BgChanger />} />
      <Route path={ROUTES_CONFIG.PASSWORD_GENERATOR} element={<PasswordGenerator />} />
      <Route path={ROUTES_CONFIG.CURRENCY_CONVERTER} element={<CurrencyConverter />} />
      <Route path={ROUTES_CONFIG.NUMBER_GAME} element={<Game />} />
      <Route path={ROUTES_CONFIG.TEXT_UTILS} element={<TextUtils />} />
      <Route 
         path={ROUTES_CONFIG.GITHUB} 
         element={<MyGit />}  
        loader={githubInfoLoader}
         />
    </Route>
    )
  )

  return (
    <>  
    <RouterProvider router={router}/> 
    </>
  )
}

export default App
