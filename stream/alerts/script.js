// const CLIENT_ID = "gjyuw9avnnhesqj6seae7w8ysu9fcy"; original
const CLIENT_ID = "nr2jgg8qwoxygcezzhbpbd20e8l1ae";
// const REDIRECT_URI = "https://boem.fr/stream/alerts/";
const REDIRECT_URI = "http://localhost:8888/stream/alerts/";
const SCOPES = ["user:read:email", "channel:read:subscriptions"];

// Diverses fonctions utilitaires
const helpers = {
  // Encode un objet sous forme d'une querystring utilisable dans une URL :
  // {"name": "Truc Muche", "foo": "bar"}  ->  "name=Truc+Muche&foo=bar"
  encodeQueryString: function (params) {
    const queryString = new URLSearchParams();
    for (let paramName in params) {
      queryString.append(paramName, params[paramName]);
    }
    return queryString.toString();
  },

  // Décode une querystring sous la forme d'un objet :
  // "name=Truc+Muche&foo=bar"  ->  {"name": "Truc Muche", "foo": "bar"}
  decodeQueryString: function (string) {
    const params = {};
    const queryString = new URLSearchParams(string);
    for (let [paramName, value] of queryString) {
      params[paramName] = value;
    }
    return params;
  },

  // Récupère et décode les paramètres de l'URL
  getUrlParams: function () {
    return helpers.decodeQueryString(location.hash.slice(1));
  },
};

// Fonctions liées à Twitch
const twitch = {
  // Vérifie si l'utilisateur est authentifié ou non
  isAuthenticated: function () {
    const params = helpers.getUrlParams();
    return params["access_token"] !== undefined;
  },

  // Redirige l'utilisateur sur la page d'authentification de Twitch avec les
  // bons paramètres
  authentication: function () {
    const params = {
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: "token",
      scope: SCOPES.join(" "),
    };
    const queryString = helpers.encodeQueryString(params);
    const authenticationUrl = `https://id.twitch.tv/oauth2/authorize?${queryString}`;
    location.href = authenticationUrl;
  },
  getUserId: function (userName) {
    const params = helpers.getUrlParams();

    return fetch(`https://api.twitch.tv/helix/users?login=${userName}`, {
      headers: {
        "Client-ID": CLIENT_ID,
        Authorization: `Bearer ${params["access_token"]}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        return result.data[0].id;
      });
  },
  getLastFollowers: function (userId) {
    const params = helpers.getUrlParams();

    return fetch(`https://api.twitch.tv/helix/users/follows?to_id=${userId}`, {
      headers: {
        "Client-ID": CLIENT_ID,
        Authorization: `Bearer ${params["access_token"]}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      });
  },
};

// Fonction principale
function main() {
  // On lance l'authentification si l'utilisateur n'est pas authentifié
  if (!twitch.isAuthenticated()) {
    twitch.authentication();
  } else {
    // Une fois l'authentification réussie, récupérez l'ID de l'utilisateur
    twitch
      .getUserId("xineus13")
      .then((userId) => {
        // Utilisez l'ID pour récupérer les derniers followers
        return twitch.getLastFollowers(userId);
      })
      .then((followers) => {
        // Faites quelque chose avec la liste des derniers followers
        console.log("Derniers followers :", followers);
      })
      console.log("je suis une carotte")
      .catch((error) => console.error(error.message));
  }
}

// On appelle la fonction main() lorsque la page a fini de charger
window.onload = main;
