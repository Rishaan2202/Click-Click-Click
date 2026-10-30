type LeaderboardContentProps = {
    values: Array<{ name: string; score: number }>;
}

const LeaderboardContent = ({ values }: LeaderboardContentProps) => {
    return (
        <div>
            <div>
                {values.map((value, index) => (
                    <div key={index} className="flex gap-2 m-2 p-2 bg-[var(--muted-teal)] rounded-xl">
                        <span>{value.name}</span>
                        <span>{value.score}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeaderboardContent
