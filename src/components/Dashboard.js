import React from 'react';
import TreeList from './TreeList';
import TreeFilters from './TreeFilters';


const DashboardPage = () => (
    <div className="dashboard">
        <TreeFilters />
        <TreeList />
    </div>
);

export default DashboardPage;
