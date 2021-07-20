
import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Pie } from "react-chartjs-2";
import { Line } from 'react-chartjs-2';
//import "./nchart.css";

const Chart = ({ bcolor, confirmed, recovered, deaths, country }) => {
    return (
        <div>

            

            <a
                className='btn btn-gh'
                href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
            >
                Github Source
            </a><br /><br />

            
            <Line 
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [
                        {
                            label: 'People',
                            data: [confirmed, recovered, deaths],
                            fill: true,
                            backgroundColor: bcolor,
                            borderColor: 'rgba(255, 99, 132, 0.2)',
                            borderWidth: 4,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    legend: {
                        display: true,
                        position: "right",
                    },
                    title: {
                        display: true,
                        text: country ? `${country}` : `Global`,
                        fontSize: 25,
                    },
                }}

            />

        </div>
    );


};


export default Chart;
