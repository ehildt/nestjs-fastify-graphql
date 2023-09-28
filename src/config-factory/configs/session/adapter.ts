export class SessionAdapter {
  get SESSION_SECRET(): string {
    return process.env.SESSION_SECRET;
  }

  get SESSION_SALT(): string {
    return process.env.SESSION_SALT;
  }
}
