import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) Layout = route.layout;
                        else if (route.layout === null) Layout = Fragment;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/following">Following</Link>
                            <Link to="/upload">Upload</Link>
                            <Link to="/search">search</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

export default App;
