import BarGraph from '@/app/components/bar_graph'
import PieChart from '@/app/components/pie_chart'
import LineGraph from '@/app/components/line_graph'
import { getDbData } from '@/actions/get_db_data'

const Stats = async () => {

    const db_data = await getDbData()

    const users = db_data.length

    const date_wise_users = db_data.filter((user) => user.login_time)
    const hackclub_users = db_data.filter((user) => user.type === 'hackclub').length
    const guests = db_data.filter((user) => user.type === 'guest').length

    console.log(users)

    const bar_graph_data = [
        { year: 2026, month: 'January', value: date_wise_users.filter((user) => user.login_time.getMonth() === 0).length },
        { year: 2026, month: 'February', value: date_wise_users.filter((user) => user.login_time.getMonth() === 1).length },
        { year: 2026, month: 'March', value: date_wise_users.filter((user) => user.login_time.getMonth() === 2).length },
        { year: 2026, month: 'April', value: date_wise_users.filter((user) => user.login_time.getMonth() === 3).length },
        { year: 2026, month: 'May', value: date_wise_users.filter((user) => user.login_time.getMonth() === 4).length },
        { year: 2026, month: 'June', value: date_wise_users.filter((user) => user.login_time.getMonth() === 5).length },
        { year: 2026, month: 'July', value: date_wise_users.filter((user) => user.login_time.getMonth() === 6).length },
        { year: 2026, month: 'August', value: date_wise_users.filter((user) => user.login_time.getMonth() === 7).length },
        { year: 2026, month: 'September', value: date_wise_users.filter((user) => user.login_time.getMonth() === 8).length },
        { year: 2026, month: 'October', value: date_wise_users.filter((user) => user.login_time.getMonth() === 9).length },
        { year: 2026, month: 'November', value: date_wise_users.filter((user) => user.login_time.getMonth() === 10).length },
        { year: 2026, month: 'December', value: date_wise_users.filter((user) => user.login_time.getMonth() === 11).length }
    ]

    const pie_chart_data = [hackclub_users, guests, 0]

    return (
        <>
            <div className='animate-slide-down'>
                <h1 className='m-2 text-5xl'>Stats</h1>
                <div className='flex flex-col justify-centre items-center m-4 bg-[var(--apricot-cream)] rounded-lg p-4'>
                    <h1 className='m-2 text-3xl'>Users' Trend</h1>
                    <BarGraph styling='w-[70vw] h-[40vh]' data={bar_graph_data} />
                </div>
                <div className='flex flex-col justify-centre items-center m-4 bg-[var(--apricot-cream)] rounded-lg p-4'>
                    <h1 className='m-2 text-3xl'>Types of Users</h1>
                    <PieChart styling='w-[30vw]' data={pie_chart_data} />
                </div>
                <LineGraph styling='w-[70vw] h-[40vh]' data={bar_graph_data} />
            </div>
        </>
    )
}

export default Stats