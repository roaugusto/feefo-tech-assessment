import { AccountOverview } from './components/AccountOverview';
import { GlobalStyle } from './styles/global';

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: 'Support',
      email: 'support@feefo.com',
      phone: '020 3362 4208'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    }
  };


  return (
    <div>
      <AccountOverview data={accountOverviewStub} />
      <GlobalStyle />
    </div>
  );
}

export default App;
