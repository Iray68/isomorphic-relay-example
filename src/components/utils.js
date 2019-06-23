export const taggedTemplate = (
    strings,
    ...keys
) => {
  return (...values) => {
    let dict = values[values.length - 1] || {};
    const [ first, ...tails ] = strings;

    let result = [ first ];

    keys.forEach((key, i) => {
      let value = Number.isInteger(key) ? values[parseInt(key)] : dict[key];
      result.push(value, tails[i]);
    });

    return result.join('');
  };
};