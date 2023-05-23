function canWin(currentState: string): boolean {
  for (let i = 0; i < currentState.length - 1; i++) {
    if (currentState[i] === '+' && currentState[i + 1] === '+') {
      const nextState = currentState.substring(0, i) + '--' + currentState.substring(i + 2);
      if (!canWin(nextState)) {
        return true;
      }
    }
  }
  return false;
}
