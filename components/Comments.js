import { Giscus } from "@giscus/react";

const Comments = () => {
  return (
      <Giscus
        repo="jaywhen/blog-comments"
        repoId="R_kgDOGzaLRQ"
        category="Announcements"
        categoryId="DIC_kwDOGzaLRc4CBDCE"
        mapping="pathname"
        reactionsEnabled="1"
        theme="light" 
        />
  )
};

export default Comments;

