import SkeletonCard from "./components/SkeletonCard"
export default function Product() {
    return <div className="max-w-7xl mx-auto border pt-8 px-8 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6 text-black">
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
        </div>
    </div>
}