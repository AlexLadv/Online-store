class App {
  private greeting: string
  constructor(value: string) {
    this.greeting = value;
  }

  start() {
    console.log(`${this.greeting}!!! Init Online Store Task`);
  }
}

export { App };
