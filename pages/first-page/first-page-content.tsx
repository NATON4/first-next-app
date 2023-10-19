import Link from "next/link";
import style from '../../styles/first-page.module.css';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import '../../styles/global.css';
import Layout from '../../components/Layout';

type PostData = {
    id: number;
    title: string;
    content: string;
    published: boolean;
    authorId: number;
};

export default function FirstPage({posts: initialPosts}: { posts: PostData[] }) {
    const router = useRouter();
    const {color} = router.query;
    const [posts, setPosts] = useState(initialPosts);
    const [postIdToDelete, setPostIdToDelete] = useState("");
    const [createdPost, setCreatedPost] = useState({title: "", content: "", authorEmail: ""})
    const [createdUser, setCreatedUser] = useState({name: "", email: ""})

    useEffect(() => {
        const interval = setInterval(async () => {
            const res = await fetch('http://localhost:5000/feed');
            const updatedPosts: PostData[] = await res.json();
            setPosts(updatedPosts);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleDeletePost = async () => {
        if (postIdToDelete) {
            const res = await fetch(`http://localhost:5000/post/${postIdToDelete}`, {
                method: 'DELETE',
            });

            if (res.status === 200) {
                const updatedPosts = posts.filter((post) => post.id !== Number(postIdToDelete));
                setPosts(updatedPosts);
                setPostIdToDelete("");
            }
        }
    };

    const handleCreatePost = async () => {
        const res = await fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createdPost),
        });

        if (res.status === 200) {
            const newPost: PostData = await res.json();
            setPosts([...posts, newPost]);
            setCreatedPost({title: '', content: '', authorEmail: ''});
        }
    };

    const handleCreateUser = async () => {
        const res = await fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createdUser),
        });

        if (res.status === 200) {
            setCreatedUser({name: '', email: ''});
        }

        };


    return (
        <Layout>
            <div className={style.mainContent}>
                {color === 'black' ? (
                    <h1 className={style.black}>Hi there!!!</h1>
                ) : color === 'grey' ? (
                    <h1 className={style.grey}>Hi there!!!</h1>
                ) : (
                    <h1>Hi there!!!</h1>
                )}

                <div className={style.controlButtons}>
                    <input
                        type="text"
                        placeholder="Ваше ім'я"
                        value={createdUser.name}
                        onChange={(e) => setCreatedUser({ ...createdUser, name: e.target.value })}
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        value={createdUser.email}
                        onChange={(e) => setCreatedUser({ ...createdUser, email: e.target.value })}
                    />

                    <button onClick={handleCreateUser}>Створити користувача</button>
                </div>

                <div className={style.controlButtons}>
                    <input
                        type="text"
                        placeholder="Заголовок поста"
                        value={createdPost.title}
                        onChange={(e) => setCreatedPost({...createdPost, title: e.target.value})}
                    />

                    <input
                        type="text"
                        placeholder="Контент поста"
                        value={createdPost.content}
                        onChange={(e) => setCreatedPost({...createdPost, content: e.target.value})}
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        value={createdPost.authorEmail}
                        onChange={(e) => setCreatedPost({...createdPost, authorEmail: e.target.value})}
                    />

                    <button onClick={handleCreatePost}>Створити новий пост</button>
                </div>

                <div className={style.controlButtons}>
                    <input
                        type="text"
                        placeholder="ID поста"
                        value={postIdToDelete}
                        onChange={(e) => setPostIdToDelete(e.target.value)}
                    />
                    <button onClick={handleDeletePost}>Видалити пост</button>
                </div>

                <div className={style.postWrapper}>
                    {posts.map((post: PostData) => (
                        <div key={post.id} className={style.post}>
                            <h2 className={style.post__title}>{post.title} <span
                                className={style.specialId}>{post.id}</span></h2>
                            <p className={style.post__body}>
                                {post.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={style.link}>
                    <Link href="/initial-page">Initial-page</Link>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:5000/feed');
    const posts: PostData[] = await res.json();

    return {
        props: {
            posts,
        },
    };
}
