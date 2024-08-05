import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { QueryContainer } from './components/QueryContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <main className="min-h-screen text-white bg-dark-900">
            <Header />
            <div className="max-w-6xl mx-auto f">
                <SideBar />
                <div className="w-full pt-8 max-w-[916px]">
                    <TopBar />
                    <QueryContainer />
                </div>
            </div>
        </main>
    </div>
  );
};

export default App;
