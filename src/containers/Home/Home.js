import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import Employees from '../../components/Employees/Employees';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import FooterBar from '../../components/FooterBar/FooterBar';

class Home extends Component {
    state = {
        employees: [
            { id: 'deepak', name: 'Deepak' },
            { id: 'gowri', name: 'Gowri' },
            { id: 'janet', name: 'Janet' },
            { id: 'thripura', name: 'Thripura' },
            { id: 'rohith', name: 'Rohith' },
            { id: 'gowshik', name: 'Gowshik' },
            { id: 'siva', name: 'Siva' },
            { id: 'barath', name: 'Barath' },
            { id: 'murali', name: 'Murali' },
            { id: 'nagarjun', name: 'Nagarjun' },
        ],
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <CardColumns>
                    <Employees 
                        employees={this.state.employees} />
                </CardColumns>
                <FooterBar />
            </div>
        );
    }
}

export default Home;