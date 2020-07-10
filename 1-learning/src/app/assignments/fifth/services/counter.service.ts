export class CounterService {
  public counter = 0;

  public sumCounter(): void {
    this.counter++;
  }
}