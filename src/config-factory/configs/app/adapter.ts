export class AppConfigAdapter {
  get PORT(): number {
    return parseInt(process.env.PORT, 10);
  }

  get NODE_ENV(): string {
    return process.env.NODE_ENV;
  }
}
