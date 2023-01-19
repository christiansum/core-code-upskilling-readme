import "./styles.css";
import { Link, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [routesList, setRoutesList] = useState([]);
    const [postInfo, setPostInfo] = useState([]);

    useEffect(() => {
        if (isLoading) {
            let blogRoutes = [
                {
                    path: "/",
                    children: [{ index: true, element: <Home /> }]
                }
            ];
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((r) => r.json())
                .then((p) => {
                    console.log(p);
                    setPostInfo(p);
                    postInfo.map((res) => {
                        let path = "/" + res.id;
                        let routeObject = {
                            path: path,
                            element: <Container posts={res} />
                        };
                        return blogRoutes[0].children.push(routeObject);
                    });
                    setRoutesList(blogRoutes);
                    console.log(blogRoutes);
                    setIsLoading(false);
                });
        }
        //blogRoutes[0].children = [];
    }, [isLoading]);

    function Home() {
        //console.log(postInfo);
        return (
            <div className="Home">
                <ul>
                    {postInfo &&
                        postInfo.map((element) => {
                            let title = element.title ? element.title.slice(0, 26) : "";
                            return (
                                <li>
                                    <h3>
                                        <Link to={element.id}>Title: {title}...</Link>
                                    </h3>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }

    function Container({ posts }) {
        return (
            <div className="Content">
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
                <p>
                    <Link to="/">Go to the home page</Link>
                </p>
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Christian's Blog</h1>
            <h2>
                There are two ways to write error-free programs; only the third works.
            </h2>
            <hr></hr>
            <div id="content">{useRoutes(routesList)}</div>
        </div>
    );
}
