import Link from 'next/link';
import style from '../../styles/static-page.module.css';
import { useState } from 'react';

interface StaticData {
    getStaticData(): Promise<string>;
}

interface StaticPageProps {
    staticData: string;
}

class StaticData implements StaticData {
    public async getStaticData(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Static data here.");
            }, 1000);
        });
    }
}

class StaticDataProxy implements StaticData {
    private staticData: string | null = null;
    private realSubject: StaticData = new StaticData();

    public async getStaticData(): Promise<string> {
        if (this.staticData === null) {
            this.staticData = await this.realSubject.getStaticData();
        }

        return this.staticData;
    }
}

function StaticPage({ staticData }: StaticPageProps) {
    return (
        <div className={style.mainContent}>
            <h1>Static Page</h1>
            <p>Static Data: {staticData}</p>
            <Link href="/initial-page">Back to Home</Link>
        </div>
    );
}

export function StaticPageProxy() {
    const staticDataProxy: StaticData = new StaticDataProxy();
    const [staticData, setStaticData] = useState<string | null>(null);

    staticDataProxy.getStaticData().then((data) => setStaticData(data));

    if (staticData === null) {
        return (
            <div className={style.mainLoading}>
                <div className={style.loading}></div>
            </div>
    )
        ;
    }

    return <StaticPage staticData={staticData} />;
}

export default StaticPageProxy;
