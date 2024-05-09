"use client"
import { ApolloClient, InMemoryCache, ApolloProvider, gql,useQuery } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
const Projects =gql`
query Query {
  get_All_Projects {
    id
    description
    name
  }
}
`


function GetAllProjects() {
  const { loading, error, data } = useQuery(Projects);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.get_All_Projects.map((project: any) => (
    <div key={project.id}>
      <p>{project.name} : {project.description}</p>
    </div>
  ));
}
export default function Page() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2> Projects </h2>
        <GetAllProjects />
      </div>
    </ApolloProvider>
  );
}