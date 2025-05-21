/* eslint-disable @typescript-eslint/no-explicit-any */
import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "@/components/SearchContent";

export default async function Search(props: any) {
  const searchParams = props.searchParams as {
    [key: string]: string | string[] | undefined;
  };

  const titleParam = Array.isArray(searchParams?.title)
    ? searchParams.title[0]
    : searchParams?.title || "";

  const songs = await getSongsByTitle(titleParam);

  return (
    <div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
}
