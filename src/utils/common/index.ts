import { Task } from '../Task';

export function debounce<Args extends any[], Ret>(
  fn: (...args: Args) => Ret,
  delay: number,
  trailing: boolean = true,
) {
  let timer: any;
  let task: Task<Ret | undefined> | null;

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const debounced = (...args: Args) => {
    if (trailing) {
      task?.resolve(undefined);
      clearTimer();

      task = new Task();
      timer = setTimeout(() => {
        task?.resolve(fn(...args));
        clearTimer();
      }, delay);

      return Promise.resolve(task);
    } else {
      if (timer) return;
      // should use microtask instead of setTimeout?
      timer = setTimeout(clearTimer, delay);

      return fn(...args);
    }
  };

  return debounced;
}

export const throttle = <Args extends any[], Ret>(fn: (...args: Args) => Ret, delay: number) => {
  let timer: any;
  let task: Task<Ret | undefined> | null;

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const throttled = (...args: Args) => {
    if (timer) return;

    task = new Task();
    timer = setTimeout(() => {
      task?.resolve(fn(...args));
      clearTimer();
    }, delay);

    return task;
  };

  return throttled;
};
