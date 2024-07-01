import clsx from 'clsx'

export default function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
    return (
        <div className={clsx(
            'flex flex-col shadow-lg h-96 bg-slate-200 hover:scale-110 transition-all p-5',
            'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite]',
            isLoading
        )}>
            <div className="relative max-h-72 flex-1 bg-zinc-400">
            </div>
            <div className="flex justify-between font-bold my-3 bg-zinc-700">
            </div>
            <div className='h-3 w-8/12 rounded-md bg-blue-600'></div>
        </div>
    )
}