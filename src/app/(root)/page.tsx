import useCookies from "@/hooks/useCookies";
import SearchLayout from "@/components/layouts/SearchLayout";
import SearchResult from "@/components/home/SearchResult";
import { redirect } from "next/navigation";
import PostSection from "@/components/home/PostSection";

const HomePage = async ({
  searchParams: { q, tab },
}: {
  searchParams: { q: string; tab: "media" };
}) => {
  const { userId } = useCookies();
  if (!userId) redirect("/login");

  return (
    <SearchLayout type={tab}>
      {q ? (
        <SearchResult query={q} />
      ) : (
        <PostSection
          imageOnly={tab === "media" ? true : false}
          userId={userId}
        />
      )}
    </SearchLayout>
  );
};

export default HomePage;
