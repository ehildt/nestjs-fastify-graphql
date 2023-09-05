export class NetworkAdapter {
  get USER_BASE_URL(): string {
    return process.env.USER_BASE_URL;
  }

  get AUTH_BASE_URL(): string {
    return process.env.AUTH_BASE_URL;
  }
}
