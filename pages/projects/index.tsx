import Link from "next/link";
// import {useRouter} from "next/router";


const ProjectsPage = () => {

    return (
        <div>
            <h1>Alla projekt</h1>
        <Link href="/projects/[...id]" as={"/projects/first"}>
            <a>First</a>
        </Link>
        <Link href="/projects/[...id]" as={"/projects/second"}>
            <a>Second</a>
        </Link>

        <Link href="/">Tillbaka till start</Link>
        </div>
    )
}

export default ProjectsPage
