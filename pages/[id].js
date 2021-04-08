export const getStaticPaths = async () => {
  var res = await fetch("https://jsonplaceholder.typicode.com/users");
  var data = await res.json();
  var paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  //   console.log(data);
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log(id);
  var res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   console.log(res);
  var data = await res.json();
//   console.log(data);
  return {
    props: {
      user: data,
    },
  };
};
const Id = ({ user }) => {
  return (
    <div className="">
      <h1>Details</h1>
      <h2>{user.name}</h2>
      <h4>{user.email}</h4>
      <h6>{user.website}</h6>
    </div>
  );
};

export default Id;
