export const findButton = (wrapper, text) => wrapper
  .find('button')
  .findWhere((b) => b.contains(text))
  .first();

export const dispatchCallsByTypeFilter = (type) => (params) => params[0].type === type;
