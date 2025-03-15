export default class Api {
  constructor({ baseUrl, authorization }) {
    this._baseUrl = baseUrl;
    this._authorization = authorization;
  }

  _checkError(err) {
    return console.log(err);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Erro: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: { authorization: this._authorization },
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch(this._checkError);
  }

  userInfoUpdate({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ name, about }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: { authorization: this._authorization },
      method: "GET",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  createCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: `${name}`, link: `${link}` }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  profileImageUpdate(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ avatar: avatar }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: { authorization: this._authorization },
      method: "DELETE",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  cardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: { authorization: this._authorization },
      method: "PUT",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: { authorization: this._authorization },
      method: "DELETE",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}
