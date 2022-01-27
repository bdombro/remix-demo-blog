import { Link, useLoaderData } from "remix";
import { Page } from "~/components/Page";
import postsMock from "./postsMock";

export default function Posts() {
  const {posts} = useLoaderData<ReturnTypeP<typeof loader>>();
  return (
    <Page>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export async function loader() {
  return {
    posts: postsMock
  }
}

export const links = () =>[
  ...Page.links,
]
