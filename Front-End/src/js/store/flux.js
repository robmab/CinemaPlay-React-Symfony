const getState = ({ getStore, getActions, setStore }) => {
const url = "https://5s2j02rg-8000.uks1.devtunnels.ms";

  return {
    store: {
      films: [],
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
              value.releaseDate= value.releaseDate
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
            setStore(store);
          })
          .catch((error) => console.log(error));
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
