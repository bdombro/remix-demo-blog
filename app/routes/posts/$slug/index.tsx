import { Link, useLoaderData } from "remix";
import { Page } from "~/components/Page";
import postsMock from "../postsMock";

export default function Post() {
  const {post} = useLoaderData<ReturnTypeP<typeof loader>>();
  if (!post) return <Page.NotFound />;
  return (
    <Page>
      <section data-post>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </section>
    </Page>
  )
}

export async function loader({ params }: { params: { slug: string } }) {
  return {
    post: postsMock.find(p => p.slug === params.slug)
  }
}

export const links = () =>[
  ...Page.links(),
]

