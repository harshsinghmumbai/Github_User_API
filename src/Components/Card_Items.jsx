const Card_Items = ({ datas }) => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:gap-7 lg:grid lg:grid-cols-3 lg:gap-3">
        {datas.map((curElem, id) => {
          const { avatar_url, login, html_url, type } = curElem;
          return (
            <div className="w-[300px] m-auto py-3 sm:py-0 lg:py-0" key={id}>
              <div className="w-full rounded-md border bg-white">
                <img
                  src={avatar_url}
                  alt="Image"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{login}</h1>
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="">Github Link:-</span>
                    <br />
                    <a
                      href={html_url}
                      target="_blank"
                      className="cursor-pointer"
                    >
                      {html_url}
                    </a>
                  </p>
                  <button
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80"
                  >
                    {type}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card_Items;
