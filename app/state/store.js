
export class Store {

  constructor(state) {
    this.state = state;
    this.listeners = [];
    this.register = this.register.bind(this);
    this.update = this.update.bind(this);
  }

  register(listener) {
    this.listeners.push(listener);
  }

  update(updateFunction) {
    this.state = updateFunction(this.state);
    const self = this;
    this.listeners.forEach((listener) => {
      listener(self.state);
    })
  }

  getState() {
    return this.state;
  }

}

export function createStore(initialState) {
  return new Store(initialState);
}

