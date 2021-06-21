export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';
  static reqOptions = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  static async getAll(succesCallback) {
    // promise way
    // fetch(GetSendData.todoApiUrl)
    //   .then((resp) => resp.json())
    //   .then((data) => succesCallback(data))
    //   .catch((err) => console.log(err));

    // asyc await way

    try {
      const resp = await fetch(GetSendData.todoApiUrl, GetSendData.reqOptions);
      const data = await resp.json();
      succesCallback(data);
    } catch (err) {
      console.error('getAll errror', err);
    }
  }

  static async createTodo(title, successCallback) {
    const newTodo = {
      title: title,
    };

    try {
      const resp = await fetch(GetSendData.todoApiUrl + '/new', {
        ...GetSendData.reqOptions,
        method: 'POST',
        body: JSON.stringify(newTodo),
      });
      const ats = await resp.json();
      successCallback(ats);
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteTodo(idToDelete, successCallback) {
    const resp = await fetch(`${GetSendData.todoApiUrl}/${idToDelete}`, {
      method: 'DELETE',
    });
    const ats = await resp.json();
    successCallback(ats);
  }

  static async doDoneUndone(id, newStatus, successCallback) {
    console.log(id, newStatus);

    const currentOptions = { ...GetSendData.reqOptions };
    currentOptions.method = 'PATCH';
    currentOptions.body = JSON.stringify({ isDone: newStatus });

    const resp = await fetch(`${GetSendData.todoApiUrl}/${id}`, currentOptions);
    const ats = await resp.json();
    successCallback(ats);
  }

  static async doEdit(id, titleVal, currentEditStatus, successCallback) {
    // console.log(id, titleVal, currentEditStatus);
    const resp = await fetch(`${GetSendData.todoApiUrl}/edit/${id}`, {
      ...GetSendData.reqOptions,
      method: 'PATCH',
      body: JSON.stringify({ isEditOn: !currentEditStatus, title: titleVal }),
    });
    const data = await resp.json();
    successCallback(data);
  }
}
