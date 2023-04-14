export async function getServerSideProps() {
    const res = await fetch("https://api.github.com/repos/softcruder/softcruder.github.io/commits");
    const data = await res.json();
    return { props: { commits: data } };
  }
  