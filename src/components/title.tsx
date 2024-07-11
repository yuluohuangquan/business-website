import { Link } from '@/navigation';
export function Title({title, url}) {

    return <div className="flex justify-between">
        <p className="font-bold">{title}</p>
        <Link href={url} className="text-blue-300 hover:text-blue-500">更多>></Link>
    </div>
}