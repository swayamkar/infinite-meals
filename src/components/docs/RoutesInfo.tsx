const Tech = () => {
  return (
    <div className="mb-8 max-w-[80vw] mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 underline underline-offset-8 ">
        Routes Reference (v2):
      </h2>
      <div>
        <ul className="text-lg sm:text-xl flex flex-col sm:grid grid-cols-2 justify-between gap-4">
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/recipes/database</span>{" "}
            </div>
            <p className="font-light">
              Looks for the recipe searched in Redis Cache and Main Database
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/recipes/completion</span>{" "}
            </div>
            <p className="font-light">
              Uses Open AI API to generate recipes based on the search query
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/recipes/uid</span>{" "}
            </div>
            <p className="font-light">Fetches Recipe based on the UID</p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">
                /api/v2/recipes/update-recipe-by-ai
              </span>{" "}
            </div>
            <p className="font-light">
              Adds the recipe generated by AI to the database and cache
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/images/database</span>{" "}
            </div>
            <p className="font-light">
              Searches for the image in the cache and database for a recipe
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/images/search</span>{" "}
            </div>
            <p className="font-light">
              Uses Serp API to search for images based on the search query using
              Google Images Search
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/images/completion</span>{" "}
            </div>
            <p className="font-light">
              <span className="font-semibold">[unused]</span> Uses DALL - E to
              create images for food Items based on the search query
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">
                /api/v2/images/update-image-db
              </span>{" "}
            </div>
            <p className="font-light">
              Uploads Images to Cloudinary and updates the database inserting
              the imgURL, also caches the imgURL
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/tags/create</span>{" "}
            </div>
            <p className="font-light">
              Creates A new Tag if not already present in list of Tags in
              Database.
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>GET</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/tags/get-tags</span>{" "}
            </div>
            <p className="font-light">
              Gets the list of all tags present in the database
            </p>
          </Card>
          <Card>
            <div className="flex w-full justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">/api/v2/tags/recipes</span>{" "}
            </div>
            <p className="font-light">
              Gets the list of all recipes present in the database with the tag
            </p>
          </Card>
          <Card>
            <div className="flex w-full flex-wrap justify-between mb-2">
              <span>POST</span>{" "}
              <span className="text-[#FF0B55]">
                /api/v2/tags/recipes/completion
              </span>{" "}
            </div>
            <p className="font-light">
              Uses Open AI API to generate a recipe for the given tag
            </p>
          </Card>
        </ul>
      </div>
    </div>
  );
};

export default Tech;

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" w-fit max-w-full rounded-lg bg-slate-200 dark:bg-slate-800 p-4 hover:shadow-md font-medium transition grid place-items-center ">
        {children}
      </div>
    </>
  );
};
