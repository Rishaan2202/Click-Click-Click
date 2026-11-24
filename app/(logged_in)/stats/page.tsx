import BarGraph from '@/app/components/bar_graph'
import PieChart from '@/app/components/pie_chart'
import { getDbData } from '@/actions/get_db_data'

const Stats = async () => {

    const db_data = await getDbData()

    const users = db_data.length
    const hackclub_users = db_data.filter((user) => user.type === 'hackclub').length
    const guests = db_data.filter((user) => user.type === 'guest').length

    console.log(users)

    const bar_graph_data = [
        { year: 2018, value: users },
        { year: 2019, value: 20 },
        { year: 2020, value: 30 },
        { year: 2021, value: 20 },
        { year: 2022, value: 50 }
    ]

    const pie_chart_data = [hackclub_users, guests, 0]

    return (
        <>
        <div className='animate-slide-down'>
            <h1 className='m-2 text-5xl'>Stats</h1>
            <p className='m-2 text-3xl bg-[var(--muted-teal)] w-fit p-2 rounded-xl'>Under Construction</p>
            <BarGraph styling='w-[30vw]' data={bar_graph_data} />
            <PieChart styling='w-[30vw]' data={pie_chart_data} />
        </div>
        </>
    )
}

export default Stats