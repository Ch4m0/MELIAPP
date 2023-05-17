"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function useSearch() {
  const [word, setWord] = useState("");
  const searchParams = useSearchParams();
  const wordFromUrl = searchParams ? searchParams.get("search") : null;

  const { push } = useRouter();

  useEffect(() => {
    if (wordFromUrl) {
      setWord(wordFromUrl);
    }
  }, [wordFromUrl]);

  const handleChange = (event) => {
    const _word = event.target.value;
    setWord(_word);
  };

  const handleSearch = (event) => {
    if (event.key !== "Enter") return;
    push(`/items?search=${word}`);
  };

  return {
    word,
    handleChange,
    handleSearch,
  };
}
