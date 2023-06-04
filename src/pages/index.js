import Link from "next/link";

export default function Home() {

  return (<>
    <div className="flex flex-row p-3">
    <Link className="p-5" href={'/search'}>Search Page</Link>
    <Link className="p-5" href={'/result'}>Result Page</Link>
    </div>
  </>)
}