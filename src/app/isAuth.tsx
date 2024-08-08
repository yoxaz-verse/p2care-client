"use client";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/core/apiHandler";

export default function isAuth() {
  const { data: getCheckAuth, isLoading, isError, isFetched } = useQuery({
    queryKey: ["checkAuth"],
    queryFn: () => {
      return getData('/patient/test/check', {});
    }
  })
  return {
    data: getCheckAuth?.data,
    isFetched,
    isLoading,
    isError
  }
}
