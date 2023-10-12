import Link from 'next/link'
import style from '../styles/initial-page.module.css'
import Image from 'next/image'

class Singleton {
    private static instance: Singleton | null = null;
    data: string = "Це екземпляр Singleton";

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

function Page() {
    const singletonInstance = Singleton.getInstance();
    const singletonInstance2 = Singleton.getInstance();
    //console.log("Same instance? " + (singletonInstance === singletonInstance2));

    return (
        <div className={style.mainContent}>
            <h1 className={style.pageTitle}>Hello, Next.js!</h1>
                <Image
                    src="/myImage.jpg"
                    className={style.authorImage}
                    width={0}
                    height={0}
                    sizes="20vh"
                    style={{ width: '20vh', height: '20vh' }}
                    alt="Picture of the author"
                />
            <p>{singletonInstance.data}</p>
            <Link
                href={{
                    pathname: "/first-page/first-page-content",
                    query: {color: "black"}
                }}
                title="Black">First page black
            </Link>
            <Link
                href={{
                    pathname: "/first-page/first-page-content",
                    query: {color: "grey"}
                }}
                title="White">First page grey
            </Link>
            <Link
                href="/first-page/static-page"
                title="White">Static page
            </Link>
        </div>
    )
}

export default Page;
