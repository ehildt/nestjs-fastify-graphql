export class AppConfigAdapter {
  get PORT(): number {
    return parseInt(process.env.PORT, 10);
  }

  get NODE_ENV(): string {
    return process.env.NODE_ENV;
  }

  get SESSION_SECRET(): string {
    return process.env.SESSION_SECRET;
  }

  get SESSION_SALT(): string {
    return process.env.SESSION_SALT;
  }
}