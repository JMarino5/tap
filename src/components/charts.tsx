import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

//The actual chart component.
//the chart is registered, which declares what chart objects will be used;
//const options defines characteristics of the chart;
//labels and data are exactly that;
//and finally the chart is returned.

const Charts = (props: any) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    responsive: true,
    plugins: {
    legend: {
        position: 'top' as const,
    },
    title: {
        display: true,
        text: props.title
    },
    },
};

const labels = props.labels;

const data = {
    labels,
    datasets: [
      {
        label: 'Number of Downloads per Title',
        data: props.values,
        backgroundColor: '#D6A83D',
      }
    ],
  };

    return (
        <React.Fragment>
            <Bar options={options} data={data} />
        </React.Fragment>
    )
}

export {
    Charts,
}