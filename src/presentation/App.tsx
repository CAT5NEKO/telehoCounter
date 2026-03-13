import { Win95Window } from "./components/win95/Win95Window";
import { TelehoCounter } from "./components/counter/TelehoCounter";

const App = () => (
  <div className="win95-desktop">
    <Win95Window title="テレホカウンター" icon="☎">
      <TelehoCounter />
    </Win95Window>
  </div>
);

export default App;
