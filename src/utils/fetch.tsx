import { useMemo } from "react";
import { useInfiniteQuery  } from "@tanstack/react-query";

import { APIResponse, ResponseInfo, CharacterInterface, LocationInterface } from "../interfaces";



const fetchAPICharacters = async (pageNum: number | false = 1): Promise<APIResponse> => {
  if (typeof pageNum === "number") {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNum}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
  return {
    info: { count: 0, pages: 0, next: "", prev: "" },
    results: [],
  };
};


export function infiniteCharacter() {
  const { isPending, error, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["pages"],
      queryFn: ({ pageParam }) => fetchAPICharacters(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage: APIResponse) => {
        const previousPage = lastPage.info.prev
          ? +lastPage.info.prev.split("=")[1]
          : 0;
        const currentPage = previousPage + 1;

        if (currentPage === lastPage.info.pages) return false;
        return currentPage + 1;
      },
    });

  const apiRequest = useMemo(() => {
    if (!data) return null;

    return data.pages.reduce(
      (prev: APIResponse, page: APIResponse) => {
        const mergedResults = [...prev.results, ...page.results] as (
          | CharacterInterface
          | LocationInterface
        )[];
        return {
          info: page.info,
          results: mergedResults,
        };
      },
      {
        info: { count: 0, pages: 0, next: "", prev: "" } as ResponseInfo,
        results: [] as (CharacterInterface | LocationInterface)[],
      }
    );
  }, [data]);

  return {
    error,
    fetchNextPage,
    isPending,
    hasNextPage,
    apiRequest,
  };
}


const fetchAPILocations = async (pageNum: number | false = 1): Promise<APIResponse> => {
  if (typeof pageNum === "number") {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/?page=${pageNum}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
  return {
    info: { count: 0, pages: 0, next: '', prev: '' },
    results: [],
  };
};
export function infiniteLocations() {

  const { isPending, error, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["pages"],
      queryFn: ({ pageParam }) => fetchAPILocations(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage: APIResponse) => {
        const previousPage = lastPage.info.prev
          ? +lastPage.info.prev.split("=")[1]
          : 0;
        const currentPage = previousPage + 1;

        if (currentPage === lastPage.info.pages) return false;
        return currentPage + 1;
      },
    });

    const apiRequest = useMemo(() => {
      if (!data) return null;

      return data.pages.reduce(
        (prev: APIResponse, page: APIResponse) => {
          const mergedResults = [...prev.results, ...page.results] as (
            | CharacterInterface
            | LocationInterface
          )[];
          return {
            info: page.info,
            results: mergedResults,
          };
        },
        {
          info: { count: 0, pages: 0, next: "", prev: "" } as ResponseInfo,
          results: [] as (CharacterInterface | LocationInterface)[],
        }
      );
    }, [data]);


    return {
      error,
      fetchNextPage,
      isPending,
      hasNextPage,
      apiRequest,
    };
}