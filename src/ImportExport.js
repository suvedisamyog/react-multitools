import Layout from "./Layout";
import CurrencyCard from "./components/CurrencyConverter/CurrencyCard";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import BgChanger from "./components/BgChanger/BgChanger";
import Counter from "./components/Counter/Counter";
import useCurrency from "./hooks/useCurrency";
import Header from "./components/Header/Header";
import MyGit from "./components/MyGit/MyGit";
import { ROUTES_CONFIG } from "./components/RoutesConfig";
import { githubInfoLoader } from "./hooks/githubInfoLoader";
import Game from "./components/NumberGussGame/GussNumber";


export  {
    CurrencyCard,
    Layout ,
    CurrencyConverter,
    PasswordGenerator,
    BgChanger,
    Counter,
    useCurrency,
    Header,
    ROUTES_CONFIG,
    MyGit,
    githubInfoLoader,
    Game
}
