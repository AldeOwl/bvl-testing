const baseUrl = 'https://myvolley.ru/api';

const checkUrl = () => {
  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get('id');
  return parseInt(id);
};

async function getData(url) {
  const res = await fetch(`${baseUrl}${url}${checkUrl()}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} ${res.status}`)
  }
  return await res.json();
}

export async function sendTestResult(body) {
  const url = `${baseUrl}/test?id=${checkUrl()}&result=`;
  const reqOpts = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return await fetch(url, reqOpts);

};

export async function authorization(body) {
  const url = 'https://myvolley.ru/servlet/admins';
  const reqOpts = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return await fetch(url, reqOpts);
};


export async function getUserName() {
  const res = await fetch(`${baseUrl}/util?request=user`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${res.status}`)
  }
  return await res.json();
}

export async function getTest() {
  return getData(`/test?id=`);
}