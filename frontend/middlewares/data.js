import axios from 'axios';

const host = 'http://localhost';
const port = '3001';
const server = `${host}:${port}`;

export async function getData(resource) {
  try {
    const { data } = await axios.get(`${server}/${resource}/`);
    return data;
  } catch (error) {
    throw `Error while getting data: ${error}`;
  }
}

export async function postData(resource, body) {
  try {
    await axios.post(`${server}/${resource}`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw `Error while posting data: ${error}`;
  }
}

export async function putData(resource, id, body) {
  try {
    await axios.put(`${server}/${resource}/${id}`, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    throw `Error while putting data: ${error}`;
  }
}

export async function deleteData(resource, id) {
  try {
    await axios.delete(`${server}/${resource}/${id}`);
  } catch (error) {
    throw `Error while deleting data: ${error}`;
  }
}
