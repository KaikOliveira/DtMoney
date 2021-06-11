import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <NewTransactionModal
        isOpen={true}
        onRequestClose={() => {console.log('safa');
        }}
      />
      <GlobalStyle />
    </>
  );
}
