import React, { Component } from 'react'
import Columns from './Columns'

export class Table extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <Columns />
                </tbody>
            </table>
        )
    }
}

export default Table
