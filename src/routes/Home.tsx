import Header from "../components/headerComponents/Header";
import NavBar from "../components/headerComponents/NavBar.tsx";

import LoaderSpiner from "../components/LoaderSpiner";
import CardList from "../components/cadsComponents/CardList";

import InfiniteScroll from "react-infinite-scroll-component";
import { infiniteCharacter } from "../utils/fetch.tsx";

function Home(  ) {
  // console.log(props);

  const { error, fetchNextPage, isPending, hasNextPage, apiRequest } =
    infiniteCharacter();

  if (error) return "An error has occurred: " + error.message;
  if (isPending) {
    return <LoaderSpiner />;
  }

  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <InfiniteScroll
        dataLength={apiRequest ? apiRequest.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className="text-white" style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <main className="container py-4">
          <section className="row">
            <CardList items={apiRequest?.results} />
          </section>
        </main>
      </InfiniteScroll>
    </>
  );
}

export default Home;
