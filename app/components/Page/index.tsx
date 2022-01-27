import { PageFooter } from "./PageFooter";
import { PageHeader } from "./PageHeader";
import styles from "./index.css";

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <section data-page>
      <PageHeader />
      <section data-pagecontent>
        {children}
      </section>
      <PageFooter />
    </section>
  );
}

Page.NotFound = () => (
  <Page>
    <h1>404</h1>
    <p>Page not found</p>
  </Page>
);

Page.links = () => [
  ...PageHeader.links(),
  ...PageFooter.links(),
  { rel: "stylesheet", href: styles }
]