const getState = ({ getStore, getActions, setStore }) => {
  const url = process.env.URL_BACK || "localhost:8000";

  return {
    store: {
      films: [],
      auxFilms: [],
    },
    actions: {
      selectFilms: () => {
        let store = getStore();

        fetch(`${url}/films`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) throw Error(res.ok);
            return res.json();
          })
          .then((data) => {
            data = data.map((value) => {
              /* Convert date */
              value.releaseDate = value.releaseDate
                .split("T")[0]
                .toString()
                .split("-")
                .reverse()
                .join("-");

              return value;
            });
            /* Sort by Score */
            data.sort(compareScore);
            store.films = data;
            store.auxFilms = data;
            setStore(store);
          })
          .catch((error) => console.log(error));
      },

      filter: (name, date, lang) => {
        let store = getStore();
        (name = name.toLowerCase()), (date = date.toLowerCase());
        lang = lang.toLowerCase();

        const date1 = parseInt(date.split("-")[0]) || 0;
        let date2 = parseInt(date.split("-")[1]) || 999999;
        if (date2.toString().length < 4) date2 = 999999;

        store.films = store.auxFilms.filter((value) => {
          const releaseYear = parseInt(value.releaseDate.split("-")[2]);
          return (
            value.title.toLowerCase().includes(name) &&
            date1 <= releaseYear &&
            releaseYear <= date2 &&
            value.originalLanguage.toLowerCase().includes(lang)
          );
        });

        setStore(store);
      },
    },
  };
};

function compareScore(a, b) {
  if (a.voteAverage < b.voteAverage) {
    return 1;
  }
  if (a.voteAverage > b.voteAverage) {
    return -1;
  }
  return 0;
}

export default getState;
