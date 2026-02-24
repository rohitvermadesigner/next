import Image from "next/image";

async function getPosts() {
  const res = await fetch(
    "https://excellenceauditors.com/wpdev/wp-json/wp/v2/posts?per_page=100&_embed",
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <h1>Blog</h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {posts.map((post) => {
            const featuredImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <div key={post.id} style={{ marginBottom: "50px" }}>
                {featuredImage && (
                  <Image
                    src={featuredImage}
                    alt={post.title.rendered}
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="h-72"
                  />
                )}

                <h2
                className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />

                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                /> */}

                <p>
                  <small>{new Date(post.date).toLocaleDateString()}</small>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
