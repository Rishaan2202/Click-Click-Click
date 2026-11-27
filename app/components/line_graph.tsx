'use client'

import Chart from 'chart.js/auto'
import { useRef, useEffect } from 'react'

type LineGraphProps = {
    year: number;
    month: string;
    value: number;
}

type Props = {
    data: LineGraphProps[];
    styling: string;
}

export const LineGraph = ({ data, styling }: Props) => {

    const chartRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {

        if (!chartRef.current) return

        const chart = new Chart(
            chartRef.current,
            {
                type: 'line',
                data: {
                    labels: data.map(item => item.month),
                    datasets: [{
                        label: 'Total Money Earned',
                        data: data.map(item => item.value),
                        backgroundColor: '#81B29A',
                        borderColor: '#000',
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        filler: {
                            propagate: false
                        },
                        title: {
                            display: true,
                            text: 'Users Joined Over Time'
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        },
                    },
                    interaction: {
                        intersect: false
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

export default LineGraph