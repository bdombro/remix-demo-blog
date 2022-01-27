import { Page } from "~/components/Page";

export default function Index() {
  return (
    <Page>
      <h1>Hello World</h1>
    </Page>
  )
}

export const links = () =>[
  ...Page.links,
]