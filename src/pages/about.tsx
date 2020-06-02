import Link from "next/link";
import { NextPage } from "next";

const About: NextPage = () => {
    return (
        <>
            <h1>About Page</h1>
            <p>Welcome to About Page!</p>
            <Link href="/">
                <a>Go to Home</a>
            </Link>
        </>
    );
};

export default About;
