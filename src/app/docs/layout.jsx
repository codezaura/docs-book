import { Container } from "@/components/layout/core";
import { Header } from "@/components/layout/header";
import { MainSidebar } from "@/components/layout/main-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// -----------------------------------------------------------------------

export const metadata = {
  title: "Getting Started - DocsBook",
};

export default function DocsLayout({ children }) {
  return (
    <Container maxWidth="full" disablePadding>
      <SidebarProvider>
        <MainSidebar />
        <main className="w-full">
          <Header
            hideLogo
            className="max-w-full"
            slots={{ leftAreaEnd: <SidebarTrigger /> }}
          />

          {children}
        </main>
      </SidebarProvider>
    </Container>
  );
}
