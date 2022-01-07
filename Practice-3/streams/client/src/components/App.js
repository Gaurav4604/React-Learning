import React from "react";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <HistoryRouter history={history}>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          {/* colon ":" allows us to pass anything as a route param */}
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/show" element={<StreamShow />} />
        </Routes>
      </HistoryRouter>
    </div>
  );
};

export default App;
