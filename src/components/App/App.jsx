import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../pages/home/Home'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/catalog" element={<ContactsList />} /> */}
    </Routes>
    //   <>
    //     <div className={css.container}>
    //       <h1>Phonebook</h1>
    //       <Form />
    //       <h2>Contacts</h2>
    //       <Filter />
    //       <ContactsList />
    //     </div>
    //   </>
    // );
  );
};
