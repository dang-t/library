import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function DataBaseSkeleton() {
    return (
        <>
            <div id='skeleton' className='novel'>
                <SkeletonTheme baseColor='rgb(32, 32, 32)' highlightColor='rgb(45, 45, 45)'>
                <Skeleton count={5}></Skeleton>
                <Skeleton count={5}></Skeleton>
                <Skeleton count={5} style={{maxWidth: 100}}></Skeleton>
                <Skeleton count={5} style={{maxWidth: 400}}></Skeleton>
                </SkeletonTheme>

            </div>
            <div id='skeleton' className='novel' style={{opacity: "60%"}}>
                <SkeletonTheme baseColor='rgb(32, 32, 32)' highlightColor='rgb(45, 45, 45)'>
                <Skeleton count={3}></Skeleton>
                <Skeleton count={3}></Skeleton>
                <Skeleton count={3} style={{maxWidth: 100}}></Skeleton>
                <Skeleton count={3} style={{maxWidth: 400}}></Skeleton>
                </SkeletonTheme>
            </div>
            <div id='skeleton' className='novel' style={{opacity: "30%"}}>
                <SkeletonTheme baseColor='rgb(32, 32, 32)' highlightColor='rgb(45, 45, 45)'>
                <Skeleton count={2}></Skeleton>
                <Skeleton count={2}></Skeleton>
                <Skeleton count={2} style={{maxWidth: 100}}></Skeleton>
                <Skeleton count={2} style={{maxWidth: 400}}></Skeleton>
                </SkeletonTheme>
            </div>
            <div id='skeleton' className='novel' style={{opacity: "10%"}}>
                <SkeletonTheme baseColor='rgb(32, 32, 32)' highlightColor='rgb(45, 45, 45)'>
                <Skeleton count={1}></Skeleton>
                <Skeleton count={1}></Skeleton>
                <Skeleton count={1} style={{maxWidth: 100}}></Skeleton>
                <Skeleton count={1} style={{maxWidth: 400}}></Skeleton>
                </SkeletonTheme>
            </div>
        </>
    )
}

export default DataBaseSkeleton;