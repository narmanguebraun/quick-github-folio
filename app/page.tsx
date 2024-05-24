import RepositoryList from "@/components/RepositoryList";
import UserProfile from "@/components/UserProfile";

import { getRepositories } from "@/queries/getRepositories";
import { getUser } from "@/queries/getUser";

export default async function Home() {
  const repositoriesData = getRepositories();
  const userData = getUser();

  const [repositories, user] = await Promise.all([repositoriesData, userData]);

  return (
    <main>
      <UserProfile user={user} />
      <section className="2xl-grid-cols-5 m-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RepositoryList repos={repositories} />
      </section>
    </main>
  );
}
