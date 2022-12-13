import axios from "axios";

export default class PostService {
  static async getDesc(limit = 12, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }

  static async getImgs(limit = 12, page = 1) {
    const responseImgs = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return responseImgs;
  }
}
