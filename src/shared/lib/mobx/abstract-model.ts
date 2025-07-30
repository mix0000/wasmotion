import { LinkedAbortController } from 'linked-abort-controller';

/**
 * Содержит общий абстрактный код для всех моделей
 */
export abstract class AbstractModel implements Disposable {
  protected abortController: LinkedAbortController;
  abortSignal: AbortSignal;

  constructor(abortSignal?: AbortSignal) {
    this.abortController = new LinkedAbortController(abortSignal);
    this.abortSignal = this.abortController.signal;
  }

  destroy() {
    this.abortController.abort();
  }

  [Symbol.dispose](): void {
    this.destroy();
  }
}
