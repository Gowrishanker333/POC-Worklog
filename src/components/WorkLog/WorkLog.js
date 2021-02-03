import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import Aux from '../../hoc/Auxiliary';
import NavigationBar from '../NavigationBar/NavigationBar';
import FooterBar from '../FooterBar/FooterBar';

const logData = [
    {
        date: '02-03-2021',
        logDetails: [
            {
                task: 'development',
                timeSpent: '2'
            },
            {
                task: 'design',
                timeSpent: '1'
            }
        ]
    },
    {
        date: '02-04-2021',
        logDetails: [
            {
                task: 'development',
                timeSpent: '1'
            },
            {
                task: 'development',
                timeSpent: '3'
            }
        ]
    },
    {
        date: '02-05-2021',
        logDetails: [
            {
                task: 'testing',
                timeSpent: '2'
            },
            {
                task: 'development',
                timeSpent: '2'
            }
        ]
    }
];

class WorkLog extends Component {
    render() {
        return (
            <Aux>
                <NavigationBar />
                <Table variant="secondary" striped hover responsive>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Project 1</th>
                            <th>Effort:Project 1</th>
                            <th>Project 2</th>
                            <th>Effort:Project 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            logData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.date}</td>
                                        {
                                            data.logDetails.map((logDetail, index) => {
                                                return <Aux key={index}>
                                                        <td>{logDetail.task}</td>
                                                        <td>{logDetail.timeSpent}</td>
                                                </Aux>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <FooterBar />
            </Aux>
        );
    }
}

export default WorkLog;