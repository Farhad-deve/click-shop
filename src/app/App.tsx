import { Header } from "../widgets/Header";
// import { Sidebar } from '../widgets/Sidebar';
import { Main } from "../widgets/Main";

function App() {
  return (
    <>
      <div className="p-1.25 font-montserrat bg-gray-100 dark:bg-gray-950">
        <Header />

        <div className="flex gap-1.25 relative">
          {/* <Sidebar /> */}

          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
