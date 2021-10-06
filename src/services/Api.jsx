import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080/api',
    });
  }

  async postVisitor(visitor) {
    const response = await this.api.post('/visitor', visitor);

    return response.data;
  }
}

export default new Api();
