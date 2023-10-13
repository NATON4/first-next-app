import React from 'react';

interface OriginalData {
    name: string;
    secondName: string;
    age: number;
}

interface AdaptedData {
    fullName: string;
    bornDate: number;
}

class DataAdapter {
    public adaptData(originalData: OriginalData): AdaptedData {
        return {
            fullName: `${originalData.name + ' ' + originalData.secondName}`,
            bornDate: 2023 - originalData.age,
        };
    }
}

class AdapterExample extends React.Component {
    render() {
        const originalData: OriginalData = {
            name: 'Anton',
            secondName: 'Hryhorenko',
            age: 19,
        };

        const adapter = new DataAdapter();
        const adaptedData = adapter.adaptData(originalData);

        return (
            <div>
                <h2>Original Data:</h2>
                <p>Name: {originalData.name}</p>
                <p>SecondName: {originalData.secondName}</p>
                <p>Age: {originalData.age}</p>
                <h2>Adapted Data:</h2>
                <p>Full Name: {adaptedData.fullName}</p>
                <p>Born at: {adaptedData.bornDate}</p>
            </div>
        );
    }
}

export default AdapterExample;
