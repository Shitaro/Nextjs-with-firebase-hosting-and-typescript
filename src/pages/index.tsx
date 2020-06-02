import Link from "next/link";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <h1>Index Page</h1>
            <p>Welcome to Index Page!</p>
            <Link href="/about">
                <a>Go to About</a>
            </Link>
        </>
    );
};

export default Home;
