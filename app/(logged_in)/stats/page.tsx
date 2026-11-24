import BarGraph from '@/app/components/bar_graph'
import { getDbData } from '@/actions/get_db_data'

const Stats = async () => {

    const db_data = await getDbData()

    const users = db_data.length

    console.log(users)

    const graph_data = [
        { year: 2018, value: users },
        { year: 2019, value: 20 },
        { year: 2020, value: 30 },
        { year: 2021, value: 20 },
        { year: 2022, value: 50 }
    ]

    return (
        <>
        <div className='animate-slide-down'>
            <h1 className='m-2 text-5xl'>Stats</h1>
            <p className='m-2 text-3xl bg-[var(--muted-teal)] w-fit p-2 rounded-xl'>Under Construction</p>
            <BarGraph styling='w-[30vw]' data={graph_data} />
        </div>
        </>
    )
}

export default Stats