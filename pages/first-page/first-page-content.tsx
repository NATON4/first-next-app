import Link from "next/link";
import style from '../../styles/first-page.module.css';
import { useRouter } from 'next/router';

export default function FirstPage() {
    const router = useRouter();
    const { color } = router.query;

    return (
        <div className={style.mainContent}>
            {color === 'black' ? (
                <h1 className={style.black}>Hi there!!!</h1>
            ) : color === 'grey' ? (
                <h1 className={style.grey}>Hi there!!!</h1>
            ) : (
                <h1>Hi there!!!</h1>
            )}
            <Link href="/initial-page">Initial-page</Link>
        </div>

    )
}
