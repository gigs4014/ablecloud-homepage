export function debounce<Fn extends (...args: any[]) => any>(fn: Fn, delay: number) {
  let timer: any;

  const debounced = ((...args) => {
    timer && clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }) as Fn;

  return debounced;
}
