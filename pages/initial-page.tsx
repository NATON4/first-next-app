import Link from 'next/link'
import style from '../styles/initial-page.module.css'
import Image from 'next/image'
import Layout from '../components/Layout'
import '../styles/global.css'

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
        <Layout>
            <div className={style.mainContent}>
                <h1 className={style.pageTitle}>Hello, Next.js!</h1>
                <Image
                    src="/myImage.jpg"
                    className={style.authorImage}
                    width={0}
                    height={0}
                    sizes="20vh"
                    style={{width: 'calc(min(25vh, 25vw))', height: 'calc(min(25vw, 25vh))'}}
                    alt="Picture of the author"
                />
                <p>{singletonInstance.data}</p>
            </div>
        </Layout>
    )
}

export default Page;
