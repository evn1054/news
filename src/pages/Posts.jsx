import React, { useEffect, useState, useRef } from "react";

import PostService from "../API/PostsService";
import { useFetching } from "../components/hooks/useFetching";
import { useObserver } from "../components/hooks/useObserver";
import { usePosts } from "../components/hooks/usePosts";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import { getPageCount } from "../components/utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  // const [desc, setDesc] = useState
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  //кастомный хук для отображения загрузки и отлова ошибок
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getImgs(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  // Получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h2 className="center">Произошла ошибка: {postError}</h2>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        mainTitle="Новости в Санкт-Петербурге"
      />
      <div
        ref={lastElement}
        style={{ height: "20px", backgroundColor: "red" }}
      ></div>
      {isPostsLoading && (
        <div className="center">
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
