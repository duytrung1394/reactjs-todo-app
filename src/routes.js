import React from 'react';
import HomePage from './pages/HomePage/HomPage';
import TasksListPage from './pages/TasksListPage/TasksListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TaskActionPage from './pages/TaskActionPage/TaskActionPage';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/tasks-list",
        exact: false,
        main: () => <TasksListPage />
    },
    {
        path: "/tasks/add",
        exact: false,
        main: ({ history }) => <TaskActionPage history={history}/>
    },
    {
        path: "/tasks/:id/edit",
        exact: false,
        main: ({ history, match }) => <TaskActionPage history={history} match={match} />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;