function printerError(s) {
  const result = labelList => {
    let count = 0;
    for (const label of labelList) {
      if (label > "m" && label <= "z") {
        count++;
      }
    }
    return count;
  };
  return `${result(s)}/${s.length}`;
}
