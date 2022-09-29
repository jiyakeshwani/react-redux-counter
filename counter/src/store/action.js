export function increment() {
  return {
    type: "increment",
  };
}

export function decrement() {
  return {
    type: "decrement",
  };
}
export function reset() {
  return {
    type: "reset",
  };
}

export function handleSteps(step) {
  return {
    type: "steps",
    payload: step,
  };
}

export function updateMax(max) {
  return {
    type: "max",
    payload: max,
  };
}
