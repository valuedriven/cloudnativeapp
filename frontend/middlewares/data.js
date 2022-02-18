import axios from 'axios';

const server = `http://${process.env.HOST}:${process.env.PORT}`;

axios.defaults.baseURL = server;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getData(resource) {
  try {
    const { data } = await axios.get(resource);
    return data;
  } catch (error) {
    throw `Error while getting data: ${error}`;
  }
}

export async function postData(resource, body) {
  try {
    await axios.post(resource, body);
  } catch (error) {
    throw `Error while posting data: ${error}`;
  }
}

export async function putData(resource, id, body) {
  try {
    await axios.put(`${resource}/${id}`, body);
  } catch (error) {
    throw `Error while putting data: ${error}`;
  }
}

export async function deleteData(resource, id) {
  try {
    await axios.delete(`${resource}/${id}`);
  } catch (error) {
    throw `Error while deleting data: ${error}`;
  }
}
