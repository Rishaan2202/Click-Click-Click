'use client'

import Chart from 'chart.js/auto'
import { useRef, useEffect } from 'react'

type Props = {
    data: Number[];
    styling: string;
}

export const PieChart = ({ data, styling }: Props) => {

    const chartRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {

        if (!chartRef.current) return

        const chart = new Chart(
            chartRef.current,
            {
                type: 'pie',
                data: {
                    labels: ['Hack Club Users', 'Guests', 'Other'],
                    datasets: [{
                        label: 'Users',
                        data: data.map(item => item),
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
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
            <canvas ref={chartRef} > </canvas>
        </div>
    )
}

export default PieChart