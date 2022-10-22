export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res)
  }

  getRecords() {
    return fetch(`${this._url}`, {
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }

  getRecord(record) {
    return fetch(`${this._url}/${record}`, {
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }

  addRecord(record) {
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(record)
    })
    .then(this._checkServerResponse);
  }

  deleteRecord(record) {
    return fetch(`${this._url}/${record}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }

}
