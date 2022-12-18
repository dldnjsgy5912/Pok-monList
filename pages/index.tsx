import axios from 'axios';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { getRecentMovies } from './api/movieApi';

export default function Home() {
  const { ref, inView } = useInView();

  const { isLoading, isError, data, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery('posts', getRecentMovies, {
    getNextPageParam: (lastPage) => {
      return lastPage.page_number + 1;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div>Error! {JSON.stringify(error)}</div>;

  return (
    <div>
      {data &&
        data?.pages.map((page_data: any) => {
          const movies = page_data.movies;
          return movies?.map((movie: any) => {
            return (
              <div className="mb-[50px] max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl " key={movie.id}>
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <Image width={500} height={500} className="h-48 w-full object-cover md:h-full md:w-48" src={movie.large_cover_image || ''} alt="Modern building architecture" />
                  </div>

                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                      {movie.title}
                    </a>
                    <p className="mt-2 text-slate-500">{movie.summary}</p>
                  </div>
                </div>
              </div>
            );
          });
        })}
      {isFetchingNextPage ? <div className="loading">Loading...</div> : null}
      <span style={{ visibility: 'hidden' }} ref={ref}>
        intersection observer marker
      </span>
    </div>
  );
}
