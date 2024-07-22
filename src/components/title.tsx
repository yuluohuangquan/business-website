import { Link } from '@/navigation';
// import { ChevronRightIcon } from "@heroicons/react/24/solid";
export function Title({title, url}) {

    return <div className="flex justify-between mb-6">
        <p className="font-bold">{title}</p>
        <Link href={url} className="text-blue-500 cursor-pointer select-none">更多</Link>
    </div>
}