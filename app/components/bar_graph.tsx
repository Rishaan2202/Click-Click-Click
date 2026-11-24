'use client'

import Chart from 'chart.js/auto'
import { useRef, useEffect } from 'react'

type BarGraphProps = {
    year: number;
    value: number;
}

type Props = {
    data: BarGraphProps[];
    styling: string;
}

export const BarGraph = ({data, styling}: Props) => {

    const chartRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {

        if (!chartRef.current) return

        const chart = new Chart(
            chartRef.current,
            {
                type: 'bar',
                data: {
                    labels: data.map(item => item.year),
                    datasets: [{
                        label: 'Value',
                        data: data.map(item => item.value),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'black',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            }
        )

        return () => {
            chart.destroy()
        }
    }, [])

    return (
        <div className={styling} >
            <canvas  ref={chartRef} > </canvas>
        </div>
    )
}

export default BarGraph