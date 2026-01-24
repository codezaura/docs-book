import { Container } from "@/components/layout/core";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MainSidebar } from "@/components/layout/main-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// -----------------------------------------------------------------------

export const metadata = {
  title: "Getting Started - DocsBook",
  description:
    "Learn programming concepts with ease, docsbook simplifies your learning process.",
};

// -----------------------------------------------------------------------

export default function DocsLayout({ children }) {
  return (
    <Container maxWidth="full" disablePadding>
      <SidebarProvider>
        <MainSidebar />
        <div className="w-full">
          <Header
            hideLogo
            className="max-w-full md:px-14"
            slots={{ leftAreaEnd: <SidebarTrigger /> }}
          />

          {children}

          <Footer />
        </div>
      </SidebarProvider>
    </Container>
  );
}
