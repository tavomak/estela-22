import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { service, name } = router.query;
  console.log(router.query);
  return (
    <>
      <h1>
        Post:
        {' '}
        {service}
      </h1>
      <h1>
        Comment:
        {' '}
        {name}
      </h1>
    </>
  );
};

export default Post;
