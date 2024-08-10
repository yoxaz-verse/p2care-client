"use client";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/core/apiHandler";

export default function isAuth() {
  const { data: getCheckAuth, isLoading, isError, error, isFetched } = useQuery({
    queryKey: ["checkAuth"],
    queryFn: () => {
      return getData('/patient/test/check', {});
    }
  })
  return {
    data: getCheckAuth?.data,
    status: getCheckAuth?.status,
    isFetched,
    error,
    isLoading,
    isError
  }
}
