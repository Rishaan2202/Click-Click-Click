import BarGraph from '@/app/components/bar_graph'
import PieChart from '@/app/components/pie_chart'
import LineGraph from '@/app/components/line_graph'
import Link from 'next/link'
import { getDbData } from '@/actions/get_db_data'
import { connection } from 'next/server'

const Stats = async () => {

    await connection();

    const db_data = await getDbData();

    const date_wise_users = db_data.filter((user) => user.login_time);
    const hackclub_users = db_data.filter((user) => user.type === 'hackclub').length;
    const guests = db_data.filter((user) => user.type === 'guest').length;

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

    const line_graph_data = [
        { year: 2026, month: 'January', value: date_wise_users.filter((user) => user.login_time.getMonth() === 0).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'February', value: date_wise_users.filter((user) => user.login_time.getMonth() === 1).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'March', value: date_wise_users.filter((user) => user.login_time.getMonth() === 2).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'April', value: date_wise_users.filter((user) => user.login_time.getMonth() === 3).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'May', value: date_wise_users.filter((user) => user.login_time.getMonth() === 4).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'June', value: date_wise_users.filter((user) => user.login_time.getMonth() === 5).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'July', value: date_wise_users.filter((user) => user.login_time.getMonth() === 6).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'August', value: date_wise_users.filter((user) => user.login_time.getMonth() === 7).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'September', value: date_wise_users.filter((user) => user.login_time.getMonth() === 8).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'October', value: date_wise_users.filter((user) => user.login_time.getMonth() === 9).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'November', value: date_wise_users.filter((user) => user.login_time.getMonth() === 10).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) },
        { year: 2026, month: 'December', value: date_wise_users.filter((user) => user.login_time.getMonth() === 11).filter((user) => user.data.money).reduce((accumulator, current) => accumulator + current.data.money, 0) }
    ]

    return (
        <>
            <div className='animate-slide-down'>
                <Link href={`/home`} className='absolute right-0 top-0 transition-transform duration-200 ease-in-out bg-[var(--twilight-indigo)] hover:scale-[1.1] hover:cursor-pointer text-white font-bold py-2 px-4 rounded m-4'>
                    Back to home
                </Link>
                <h1 className='m-2 text-5xl'>Stats</h1>
                <div className='flex flex-col justify-centre items-center m-4 bg-[var(--apricot-cream)] rounded-lg p-4'>
                    <h1 className='m-2 text-3xl'>Users' Trend</h1>
                    <BarGraph styling='w-[70vw] h-[40vh]' data={bar_graph_data} />
                </div>
                <div className='flex gap-[8vw] m-4 bg-[var(--apricot-cream)] rounded-lg p-4'>
                    <div className='flex flex-col justify-centre items-center m-4'>
                        <h1 className='m-2 text-3xl'>Types of Users</h1>
                        <PieChart styling='w-[30vw]' data={pie_chart_data} />
                    </div>
                    <div className='flex flex-col justify-centre items-center m-4'>
                        <h1 className='m-2 text-3xl'>Money Trend</h1>
                        <LineGraph styling='w-[50vw]' data={line_graph_data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats